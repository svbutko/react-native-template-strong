import React, {FC, useMemo} from 'react';
import {SectionList, SectionListProps} from 'react-native';
import {LoadState} from '../../types';
import {TryAgain} from './TryAgain';
import {Separator} from './Separator';
import {EmptyView} from './EmptyView';
import {LoadingComponent} from './LoadingComponent';
import {localization} from '../localization/localization';
import {defaultKeyIdExtractor} from '../helpers/defaultKeyIdExtractor';
import {CommonStyles} from '../../core/theme/commonStyles';

interface IProps extends SectionListProps<any> {
  loadState: LoadState;
  tryAgain?: () => void;
  error?: string | null;
}

export const SectionListWrapper: FC<IProps> = ({
  loadState,
  tryAgain,
  error,
  ...props
}) => {
  const ListEmptyComponent = useMemo(() => {
    if (loadState == LoadState.error) {
      return (
        <TryAgain
          onPress={tryAgain}
          errorText={error || localization.errors.listErrorTitle}
        />
      );
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
        contentContainerStyle={CommonStyles.listContentContainer}
        {...props}
        refreshing={refreshing}
        ListEmptyComponent={ListEmptyComponent}
      />
    );
  }
};

SectionListWrapper.defaultProps = {
  keyExtractor: defaultKeyIdExtractor,
  ListEmptyComponent: (
    <EmptyView
      title={localization.empty.noData}
      description={localization.empty.checkThisPageLater}
    />
  ),
  onEndReachedThreshold: 1,
  ItemSeparatorComponent: Separator,
};
