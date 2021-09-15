import {isIos} from "../../core/theme/commonConsts";
import {BaseUrlOpener} from "./baseUrlOpener";

export class PhoneUrl extends BaseUrlOpener {
  constructor(private phone: string | null) {
    super();
  }

  protected generateUrl(): string | null {
    if (this.phone == null) {
      return null;
    } else {
      return (isIos ? "telprompt:" : "tel:") + this.phone;
    }
  }
}
