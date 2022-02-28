import {i18next} from "~/common/localization/localization";
import {emptyValidation} from "./commonValidations";
import {validationConstants} from "./validationConstants";

export function phoneValidations(checkValue: string): string | null {
  const isEmpty = emptyValidation(checkValue);

  if (isEmpty != null) {
    return isEmpty;
  } else {
    return checkValue.length >= validationConstants.phone.minLength ? null : i18next.t("errors.invalidPhoneNumber");
  }
}
