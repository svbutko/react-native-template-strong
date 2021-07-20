import {isIos} from "./commonConsts";

export class Fonts {
  static system = isIos ? "SFProText-Regular" : "Roboto";
}
