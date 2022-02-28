import React from "react";
import {TryAgain} from "./TryAgain";
import {LoadState} from "~/types";
import {LoadingComponent} from "./LoadingComponent";
import {useTranslation} from "react-i18next";

interface IProps {
  loadState: LoadState;
  error?: string | null;
  tryAgain?: () => void;
  FallbackComponent?: React.ComponentType<any> | React.ReactElement | null;
}

export const WrapperEmptyComponent = ({loadState, error, tryAgain, FallbackComponent}: IProps) => {
  const {t} = useTranslation();
  if (error) {
    return <TryAgain onPress={tryAgain} errorText={error || t("errors.listErrorTitle")} loadState={loadState}/>;
  }
  switch (loadState) {
    case LoadState.refreshing:
    case LoadState.needLoad:
    case LoadState.firstLoad:
      return <LoadingComponent/>;
    case LoadState.error:
      return <TryAgain onPress={tryAgain} errorText={error || t("errors.listErrorTitle")} loadState={LoadState.error}/>;
    default:
      return FallbackComponent ? typeof FallbackComponent == "object" ? FallbackComponent : <FallbackComponent/> : null;
  }
};
