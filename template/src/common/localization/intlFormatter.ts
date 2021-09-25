import Intl from "intl";
import {getLanguage} from "./localization";
// eslint-disable-next-line import/no-unassigned-import
import "intl/locale-data/jsonp/en";

export function formatPercent(percent: number | string): string {
  const formatter = new Intl.NumberFormat(getLanguage(), {
    style: "percent",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  return formatter.format(Number(percent) / 100);
}

export function formatCurrency(price: number | string, currency?: string): string {
  const formatter = new Intl.NumberFormat(getLanguage(), {
    style: "currency",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    currency: currency || "USD",
  });

  return formatter.format(Number(price));
}

export function formatDecimal(value: number | string): string {
  const formatter = new Intl.NumberFormat(getLanguage(), {
    style: "decimal",
    minimumFractionDigits: 0,
  });

  return formatter.format(Number(value));
}
