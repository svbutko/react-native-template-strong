/* eslint-disable camelcase */
import {Label} from "./components/Label";
import {styledLabels} from "./components/styledLabels";
import {Typography} from "./typography";
import {LabelTypes, LabelSizes} from "./types";

const typography = new Typography();
const Brand = styledLabels.Brand;
const Regular = styledLabels.Regular;

export {
  typography,
  Brand,
  Regular,
  Label,
  LabelTypes,
  LabelSizes,
};
