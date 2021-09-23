import {ErrorRepresentationType, IErrorResult} from "../../types";
import {localization} from "../localization/localization";
import {showToast} from "../../navigation/helpers/showToast";
import {unwrapResult} from "@reduxjs/toolkit";
import {Alert} from "react-native";

export function processError(error: Error): IErrorResult {
  return {
    message: localization.errors.unknownErrorHasOccurred,
    visualRepresentation: ErrorRepresentationType.toast,
  };
}

export function handlePromiseResult(promiseAction: Promise<any>, successMessage?: string, successAction?: () => void) {
  promiseAction
    .then(unwrapResult)
    .then(() => {
      showToast({
        text: successMessage || localization.common.dataSuccessfullyUpdated,
      });
      successAction && successAction();
    })
    .catch((handledError: Error) => {
      handleErrorPostProcessing(processError(handledError));
    });
}

export function handleErrorPostProcessing(error: IErrorResult, setError?: (errorMessage: string) => void) {
  switch (error.visualRepresentation) {
    case ErrorRepresentationType.alert:
      Alert.alert(localization.errors.error, error.message);
      break;
    case ErrorRepresentationType.input:
      setError && setError(error.message);
      break;
    case ErrorRepresentationType.toast:
      showToast({
        text: error.message,
      });
      break;
    default:
      throw new Error(`Unknown error representation type: ${error.visualRepresentation}`);
  }
}

export function recheckAllValidations(recheckFunctions: (() => string | null)[]): boolean {
  let isNull: boolean = true;

  recheckFunctions.forEach((recheckFunc) => {
    const result = recheckFunc() == null;
    if (!result) {
      isNull = false;
    }
  });

  return isNull;
}
