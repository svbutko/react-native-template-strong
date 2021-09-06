import {localization} from "../localization/localization";
import {emptyValidation} from "./commonValidations";
import {validationConstants} from "./validationConstants";

export function phoneValidations(checkValue: string): string | null {
  const isEmpty = emptyValidation(checkValue);

  if (isEmpty != null) {
    return isEmpty;
  } else {
    return checkValue.length >= validationConstants.phone.minLength ? null : localization.errors.invalidPhoneNumber;
  }
}
