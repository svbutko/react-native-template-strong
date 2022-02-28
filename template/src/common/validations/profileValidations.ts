import {emptyValidation} from "./commonValidations";
import {isEmail} from "../helpers/regexHelpers";
import {validationConstants} from "./validationConstants";
import {i18next} from "~/common/localization/localization";

export function emailValidations(checkValue: string): string | null {
  const isEmpty = emptyValidation(checkValue);

  if (isEmpty != null) {
    return isEmpty;
  } else if (!isEmail(checkValue)) {
    return i18next.t("errors.invalidEmail");
  } else {
    return null;
  }
}

export function fullNameValidations(checkValue: string): string | null {
  const isEmpty = emptyValidation(checkValue);

  if (isEmpty != null) {
    return isEmpty;
  } else if (checkValue.trim().length < validationConstants.fullName.minLength) {
    return i18next.t("errors.invalidFullName");
  } else {
    return null;
  }
}
