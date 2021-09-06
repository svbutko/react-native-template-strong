import {localization} from "../localization/localization";

export function emptyValidation(checkValue: string): string | null {
  return checkValue != null && checkValue != "" ? null : localization.errors.thisFieldIsRequired;
}

export function datesValidation(from: Date, to: Date, fromLabel: string, toLabel: string, currentField: "from" | "to"): string | null {
  const fromTime = from.getTime();
  const toTime = to.getTime();

  if (fromTime == toTime) {
    return localization.errors.datesCantBeEqual(fromLabel, toLabel);
  } else {
    const isFromTimeLater = fromTime > toTime;

    switch (currentField) {
      case "from":
        return isFromTimeLater ? localization.errors.invalidFromDate(fromLabel, toLabel) : null;
      case "to":
        return isFromTimeLater ? localization.errors.invalidToDate(fromLabel, toLabel) : null;
      default:
        throw new Error(`Unknown dates validation current field: ${currentField}`);
    }
  }
}
