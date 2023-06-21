import React, {useEffect} from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {setOnboardingRoot, setTabsRoot} from '../../navigation/roots';
import {LoadingComponent} from '../../common/components/LoadingComponent';
import {isIos} from '../../core/theme/commonConsts';
import {showOnboarding} from '../../navigation/helpers/showOnboarding';
import {useAppSelector} from '../../core/store/reduxHelpers';

export const Splash: NavigationFunctionComponent = () => {
  const isOnboardingVisited = useAppSelector(
    state => state.system.isOnboardingVisited,
  );

  useEffect(() => {
    if (isOnboardingVisited) {
      setTabsRoot();
    } else if (isIos) {
      setTabsRoot(showOnboarding);
    } else {
      setOnboardingRoot();
    }
  }, [isOnboardingVisited]);

  return <LoadingComponent />;
};
