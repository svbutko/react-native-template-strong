import {datesValidation, emptyValidation} from "./commonValidations";
import {phoneValidations} from "./authValidations";
import {useCallback, useEffect, useRef, useState} from "react";
import {localization} from "../localization";
import {showToast} from "../../navigation/helpers";
import {ImageResources} from "../ImageResources.g";
import {Alert} from "react-native";
import {emailValidations, fullNameValidations} from "./profileValidations";
import {unwrapResult} from "@reduxjs/toolkit";
import {ErrorRepresentationType, IErrorResult, ToastType} from "../../types";

const validationConstants = {
  phone: {
    minLength: 8,
    maxLength: 18,
  },
  fullName: {
    minLength: 3,
    maxLength: 64,
  },
  comment: {
    maxLength: 280,
  },
  email: {
    maxLength: 254,
  },
  licensePlate: {
    minLength: 4,
    maxLength: 10,
  },
};

function processError(error: Error): IErrorResult {
  return {
    message: localization.errors.unknownErrorHasOccurred,
    visualRepresentation: ErrorRepresentationType.toast,
  };
}

function handlePromiseResult(promiseAction: Promise<any>, successMessage?: string, successAction?: () => void) {
  promiseAction
    .then(unwrapResult)
    .then(() => {
      showToast({
        text: successMessage || localization.common.dataSuccessfullyUpdated,
        type: ToastType.success,
        icon: ImageResources.check,
      });
      successAction && successAction();
    })
    .catch((handledError: Error) => {
      handleErrorPostProcessing(processError(handledError));
    });
}

function handleErrorPostProcessing(error: IErrorResult, setError?: (errorMessage: string) => void) {
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
        type: ToastType.error,
        icon: ImageResources.warning,
      });
      break;
    default:
      throw new Error(`Unknown error representation type: ${error.visualRepresentation}`);
  }
}

function recheckAllValidations(recheckFunctions: (() => string | null)[]): boolean {
  let isNull: boolean = true;

  recheckFunctions.forEach((recheckFunc) => {
    const result = recheckFunc() == null;
    if (!result) {
      isNull = false;
    }
  });

  return isNull;
}

function useDatesError(fromDate: Date, toDate: Date, fromLabel: string, toLabel: string, currentField: "from" | "to") {
  const [error, setError] = useState<string | null>(null);
  const didMountRef = useRef(false);

  const recheckValue = useCallback(() => {
    const result = datesValidation(fromDate, toDate, fromLabel, toLabel, currentField);
    setError(result);

    return result;
  }, [currentField, fromDate, fromLabel, toDate, toLabel]);

  useEffect(() => {
    if (didMountRef.current) {
      recheckValue();
    } else {
      didMountRef.current = true;
    }
  }, [recheckValue]);

  return {
    error,
    setError,
    recheckValue,
  };
}

function useInputError(checkValue: string, checkFunction: (valueToCheck: string) => string | null) {
  const [error, setError] = useState<string | null>(null);
  const didMountRef = useRef(false);

  const recheckValue = useCallback(() => {
    const result = checkFunction(checkValue);
    setError(result);

    return result;
  }, [checkFunction, checkValue]);

  useEffect(() => {
    if (didMountRef.current) {
      recheckValue();
    } else {
      didMountRef.current = true;
    }
  }, [recheckValue]);

  return {
    error,
    setError,
    recheckValue,
  };
}

export {
  emptyValidation,
  phoneValidations,
  useInputError,
  validationConstants,
  processError,
  handleErrorPostProcessing,
  emailValidations,
  datesValidation,
  useDatesError,
  fullNameValidations,
  handlePromiseResult,
  recheckAllValidations,
};
