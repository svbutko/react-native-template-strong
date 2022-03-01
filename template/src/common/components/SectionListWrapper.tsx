import React, {FC, useMemo} from "react";
import {SectionList, SectionListProps, StyleSheet, ViewStyle} from "react-native";
import {LoadState} from "../../types";
import {TryAgain} from "./TryAgain";
import {Separator} from "./Separator";
import {EmptyView} from "./EmptyView";
import {LoadingComponent} from "./LoadingComponent";
import {i18next} from "../localization/localization";
import {isAndroid} from "../../core/theme/commonConsts";
import {defaultKeyIdExtractor} from "../helpers/defaultKeyIdExtractor";

interface IProps extends SectionListProps<any> {
  loadState: LoadState;
  tryAgain?: () => void;
  error?: string | null;
}

export const SectionListWrapper: FC<IProps> = ({loadState, tryAgain, error, ...props}) => {
  const ListEmptyComponent = useMemo(() => {
    if (loadState == LoadState.error) {
      return <TryAgain onPress={tryAgain} errorText={error || i18next.t("errors.listErrorTitle")}/>;
    } else {
      return props.ListEmptyComponent;
    }
  }, [loadState, props.ListEmptyComponent, error, tryAgain]);

  const refreshing = useMemo(() => {
    return loadState == LoadState.pullToRefresh;
  }, [loadState]);

  if (loadState == LoadState.firstLoad) {
    return <LoadingComponent/>;
  } else {
    return (
      <SectionList
        contentContainerStyle={styles.contentContainer}
        removeClippedSubviews={isAndroid}
        {...props}
        refreshing={refreshing}
        ListEmptyComponent={ListEmptyComponent}
      />
    );
  }
};

SectionListWrapper.defaultProps = {
  keyExtractor: defaultKeyIdExtractor,
  ListEmptyComponent: <EmptyView title={i18next.t("empty.noData")}
                                 description={i18next.t("empty.checkThisPageLater")}/>,
  onEndReachedThreshold: 1,
  ItemSeparatorComponent: Separator,
};

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
  } as ViewStyle,
});
