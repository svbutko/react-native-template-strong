import moment, {CalendarSpec} from "moment";
// eslint-disable-next-line import/no-unassigned-import
import "moment/locale/en-gb";

export enum DateFormat {
  dayMonthShortYear = "DD.MM.YYYY",
  dayShortMonthYear = "DD MMM YYYY",
  dayMonthWeekdayShort = "DD MMMM, dd",
  dayMonthWeekdayFull = "DD MMMM, dddd",
  monthFullAndDay = "MMMM, DD",
  dayAndMonth = "DD MMMM",
  dateAndTime = "DD.MM HH:mm",
  dayAndMonthShort = "DD.MM",
  time = "HH:mm",
  year = "YYYY",
  shortMonth = "MMM",
  dayNumber = "DD",
  shortMonthYear = "MMM YYYY",
  dayMonthYear = "DD MMMM YYYY",
  full = "YYYY-MM-DD HH:mm:ss",
  yearDateTime = "YYYY.MM.DD HH:mm",
  yearMonthDay = "YYYY.MM.DD",
}

const calendarFormat: CalendarSpec = {
  sameDay: "[Today]",
  nextDay: "[Tomorrow]",
  lastDay: "[Yesterday]",
  nextWeek: "dddd",
  lastWeek: "[Last] dddd",
  sameElse: DateFormat.dayMonthShortYear,
};

export function dateFromString(obj: string | Date): Date {
  if (obj instanceof Date) {
    return obj;
  }

  return new Date(obj);
}

export function dateFromUnknown(obj: string | Date | null | number | undefined): Date | null {
  if (obj == null) {
    return null;
  }
  if (obj instanceof Date) {
    return obj;
  }

  return new Date(obj);
}

export function dateFromFormat(date: Date | number | null | undefined | string, format: DateFormat): string {
  let result = "";

  const formattedDate: Date | null = dateFromUnknown(date);
  if (formattedDate) {
    result = moment(formattedDate).format(format);
  }

  return result;
}

export function calendarDate(date: Date | null | number | undefined | string, withFormat?: boolean): string {
  let result = "";

  const formattedDate: Date | null = dateFromUnknown(date);
  if (formattedDate) {
    result = withFormat ? moment(formattedDate).calendar(null, calendarFormat) : moment(formattedDate).calendar();
  }

  return result;
}

export function setMomentLocale(locale?: string): void {
  moment.locale(locale);
}

export function getUnixDate(date: Date | null | number | undefined | string): number {
  return moment(date).unix() * 1000;
}

export function getInitialDate(date: Date | null | number | undefined | string, defaultDate?: Date): Date {
  if (date != null) {
    return moment(date).toDate();
  } else {
    return defaultDate || new Date();
  }
}
