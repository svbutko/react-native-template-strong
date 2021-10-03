import {BaseUrlOpener} from "./baseUrlOpener";

export class HttpUrl extends BaseUrlOpener {
  constructor(private httpUrl: string | null) {
    super();
  }

  protected generateUrl(): string | null {
    if (this.httpUrl == null) {
      return null;
    } else {
      if (this.httpUrl.startsWith("http")) {
        return this.httpUrl;
      } else {
        return "https://" + this.httpUrl;
      }
    }
  }
}
