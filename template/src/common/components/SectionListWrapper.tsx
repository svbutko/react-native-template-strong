import React, {FC, useMemo} from "react";
import {SectionList, SectionListProps, StyleSheet, ViewStyle} from "react-native";
import {LoadState} from "../../types";
import {isAndroid} from "../../core/theme";
import {defaultKeyIdExtractor} from "../helpers";
import {localization} from "../localization";
import {TryAgain} from "./TryAgain";
import {Separator} from "./Separator";
import {EmptyView} from "./EmptyView";
import {LoadingComponent} from "./LoadingComponent";

interface IProps extends SectionListProps<any> {
  loadState: LoadState;
  tryAgain?: () => void;
  error?: string | null;
}

//TODO: Add to Storybook
export const SectionListWrapper: FC<IProps> = ({loadState, tryAgain, error, ...props}) => {
  const ListEmptyComponent = useMemo(() => {
    if (loadState == LoadState.error) {
      return <TryAgain onPress={tryAgain} errorText={error || localization.errors.listErrorTitle} />;
    } else {
      return props.ListEmptyComponent;
    }
  }, [loadState, props.ListEmptyComponent, error, tryAgain]);

  const refreshing = useMemo(() => {
    return loadState == LoadState.pullToRefresh;
  }, [loadState]);

  if (loadState == LoadState.firstLoad) {
    return <LoadingComponent />;
  } else {
    return (
      <SectionList
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={Separator}
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
  ListEmptyComponent: <EmptyView title={localization.empty.noData} description={localization.empty.checkThisPageLater} />,
  onEndReachedThreshold: 1,
};

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
  } as ViewStyle,
});
