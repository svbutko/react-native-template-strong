// eslint-disable-next-line import/no-unassigned-import
import "react-i18next";
import {LanguageResource} from "~/common/localization/localization";
import {i18n} from "i18next";
import {Namespace, TFunction} from "react-i18next";

declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: LanguageResource;
  }

  export function getI18n(): Omit<i18n, "t"> & {t: TFunction<Namespace>};
}
