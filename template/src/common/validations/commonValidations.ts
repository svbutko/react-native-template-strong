import {i18next} from "~/common/localization/localization";

export function emptyValidation(checkValue: string): string | null {
  return checkValue != null && checkValue != "" ? null : i18next.t("errors.thisFieldIsRequired");
}

export function datesValidation(from: Date, to: Date, fromLabel: string, toLabel: string, currentField: "from" | "to"): string | null {
  const fromTime = from.getTime();
  const toTime = to.getTime();

  if (fromTime == toTime) {
    return i18next.t("errors.datesCantBeEqual", {fromField: fromLabel, toField: toLabel});
  } else {
    const isFromTimeLater = fromTime > toTime;

    switch (currentField) {
      case "from":
        return isFromTimeLater ? i18next.t("errors.invalidFromDate", {
          fromField: fromLabel,
          toField: toLabel,
        }) : null;
      case "to":
        return isFromTimeLater ? i18next.t("errors.invalidToDate", {
          fromField: fromLabel,
          toField: toLabel,
        }) : null;
      default:
        throw new Error(`Unknown dates validation current field: ${currentField}`);
    }
  }
}
