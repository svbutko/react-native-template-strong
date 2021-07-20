import {Linking} from "react-native";
import {ignorePromise} from "../utils";

export abstract class BaseUrlOpener {
  protected constructor() {
    this.tryOpen = this.tryOpen.bind(this);
  }

  tryOpen(): void {
    const url = this.generateUrl();
    if (url == null) {
      return;
    }

    ignorePromise(this.tryOpenUrl(url));
  }

  async open(): Promise<void> {
    const url = this.generateUrl();
    if (url == null) {
      return;
    }

    await this.tryOpenUrl(url);
  }

  protected async tryOpenUrl(url: string): Promise<void> {
    ignorePromise(Linking.openURL(url));
  }

  protected abstract generateUrl(): string | null;
}
