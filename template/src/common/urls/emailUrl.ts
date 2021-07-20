import {BaseUrlOpener} from "./baseUrlOpener";

export class EmailUrl extends BaseUrlOpener {
  constructor(private email: string | null) {
    super();
  }

  protected generateUrl(): string | null {
    if (this.email == null) {
      return null;
    } else {
      let url = this.email;
      if (!url.startsWith("mailto")) {
        url = "mailto://" + url;
      }

      return url;
    }
  }
}
