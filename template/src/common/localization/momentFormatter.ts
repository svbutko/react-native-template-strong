import moment from "moment";
import "moment/locale/ru";

export enum DateFormat {
    dayMonthShortYear = "DD MM YYYY",
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

export function dateFromString(obj: string | Date): Date {
    if (obj instanceof Date) {
        return obj;
    }

    return new Date(obj);
}

export function dateFromUnknown(obj: string | Date | null | undefined): Date | null {
    if (obj == null) {
        return null;
    }
    if (obj instanceof Date) {
        return obj;
    }

    return new Date(obj);
}

export function dateFromFormat(date: Date | null | undefined | string, format: string): string {
    let result = "";

    const _date: Date | null = dateFromUnknown(date);
    if (_date) {
        result = moment(_date).format(format).toLowerCase();
    }

    return result;
}

export function calendarDate(date: Date | null | undefined | string): string {
    let result = "";

    const _date: Date | null = dateFromUnknown(date);
    if (_date) {
        result = moment(_date).calendar();
    }

    return result;
}

export function setMomentLocale(locale?: string): void {
    moment.locale(locale);
}
