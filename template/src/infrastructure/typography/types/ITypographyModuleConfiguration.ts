import {Modules} from "../../../infrastructure";
import {LabelConfig} from "./LabelConfig";
import {LabelSizes} from "./LabelSizes";
import {LabelTypes} from "./LabelTypes";

type SectionConfig = {
  [P in LabelSizes]?: LabelConfig;
};

type TypographyConfiguration = {
  [P in LabelTypes]?: SectionConfig;
};

export interface ITypographyModuleConfiguration extends Modules.BaseLoggingModuleConfiguration, TypographyConfiguration {
}
