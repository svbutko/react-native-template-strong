import React, {useMemo} from "react";
import {Constructor, StyleSheet, ViewStyle, VirtualizedListWithoutRenderItemProps} from "react-native";
import {LoadState} from "~/types";
import {Separator} from "./Separator";
import {EmptyView} from "./EmptyView";
import {defaultKeyIdExtractor} from "../helpers/defaultKeyIdExtractor";
import {isAndroid} from "~/core/theme/commonConsts";
import {WrapperEmptyComponent} from "./WrapperEmptyComponent";
import {useTranslation} from "react-i18next";

type ListProps<T> =
  VirtualizedListWithoutRenderItemProps<T>
  & {ItemSeparatorComponent?: React.ComponentType<any> | null | undefined};

export interface IWrapperProps {
  loadState: LoadState;
  tryAgain?: () => void;
  error?: string | null;
}

interface IProps<T> extends IWrapperProps {
  Component: Constructor<React.Component<T>>;
  props: T;
  loadState: LoadState;
  tryAgain?: () => void;
  error?: string | null;
}

//todo hide firstLoad, error, tryAgain and loadMore inside wrapper
export function Wrapper<T extends ListProps<any>>({loadState, tryAgain, error, Component, ...props}: IProps<T>) {
  const {t} = useTranslation();
  const ListEmptyComponent = useMemo(() => {
    return (
      <WrapperEmptyComponent
        loadState={loadState}
        tryAgain={tryAgain}
        error={error}
        FallbackComponent={props.props.ListEmptyComponent || <EmptyView title={t("empty.noData")}
                                                                        description={t("empty.checkThisPageLater")}/>}
      />
    );
  }, [loadState, tryAgain, error, props.props.ListEmptyComponent, t]);

  return (
    <Component
      contentContainerStyle={styles.contentContainer}
      ItemSeparatorComponent={Separator}
      removeClippedSubviews={isAndroid}
      refreshing={loadState == LoadState.pullToRefresh}
      keyExtractor={defaultKeyIdExtractor}
      onEndReachedThreshold={1}
      {...props.props}
      ListEmptyComponent={ListEmptyComponent}
    />
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
  } as ViewStyle,
});
