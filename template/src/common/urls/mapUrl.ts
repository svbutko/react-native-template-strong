import {isIos} from "../../core/theme/commonConsts";
import {BaseUrlOpener} from "./baseUrlOpener";

export class MapUrl extends BaseUrlOpener {
  constructor(private latitude: number, private longitude: number, private address: string) {
    super();
  }

  protected generateUrl(): string | null {
    if (isIos) {
      return `https://maps.apple.com/?q=${encodeURIComponent(this.address)}&sll=${this.latitude},${this.longitude}`;
    } else {
      return `geo:${this.latitude}, ${this.longitude}`;
    }
  }
}
