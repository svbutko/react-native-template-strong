import React, {useEffect} from "react";
import {NavigationFunctionComponent} from "react-native-navigation";
import {setOnboardingRoot, setTabsRoot} from "../../navigation/roots";
import {useAppSelector} from "../../core/store/store";
import {LoadingComponent} from "../../common/components/LoadingComponent";

export const Splash: NavigationFunctionComponent = () => {
  const isOnboardingVisited = useAppSelector((state) => state.system.isOnboardingVisited);

  useEffect(() => {
    if (isOnboardingVisited) {
      setTabsRoot();
    } else {
      setOnboardingRoot();
    }
  }, [isOnboardingVisited]);

  return <LoadingComponent />;
};
