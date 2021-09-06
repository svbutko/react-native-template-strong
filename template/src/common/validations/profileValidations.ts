import {emptyValidation} from "./commonValidations";
import {isEmail} from "../helpers/regexHelpers";
import {validationConstants} from "./validationConstants";
import {localization} from "../localization/localization";

export function emailValidations(checkValue: string): string | null {
  const isEmpty = emptyValidation(checkValue);

  if (isEmpty != null) {
    return isEmpty;
  } else if (!isEmail(checkValue)) {
    return localization.errors.invalidEmail;
  } else {
    return null;
  }
}

export function fullNameValidations(checkValue: string): string | null {
  const isEmpty = emptyValidation(checkValue);

  if (isEmpty != null) {
    return isEmpty;
  } else if (checkValue.trim().length < validationConstants.fullName.minLength) {
    return localization.errors.invalidFullName;
  } else {
    return null;
  }
}
