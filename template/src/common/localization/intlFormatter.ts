import Intl from "intl";
import {i18next} from "./localization";
// eslint-disable-next-line import/no-unassigned-import
import "intl/locale-data/jsonp/en";

export function formatPercent(percent: number | string): string {
  const formatter = new Intl.NumberFormat(i18next.language, {
    style: "percent",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  return formatter.format(Number(percent) / 100);
}

export function formatCurrency(price: number | string, currency?: string): string {
  const formatter = new Intl.NumberFormat(i18next.language, {
    style: "currency",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    currency: currency || "USD",
  });

  return formatter.format(Number(price));
}

export function formatDecimal(value: number | string): string {
  const formatter = new Intl.NumberFormat(i18next.language, {
    style: "decimal",
    minimumFractionDigits: 0,
  });

  return formatter.format(Number(value));
}
