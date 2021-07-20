import {BaseUrlOpener} from "./baseUrlOpener";
import {isIos} from "../../core/theme";

export class PhoneUrl extends BaseUrlOpener {
  constructor(private phone: string | null) {
    super();
  }

  protected generateUrl(): string | null {
    if (this.phone == null) {
      return null;
    } else {
      return isIos ? "telprompt:" + this.phone : "tel:";
    }
  }
}
