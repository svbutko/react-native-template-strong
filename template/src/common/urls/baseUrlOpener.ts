import {Linking} from "react-native";

export abstract class BaseUrlOpener {
  protected constructor() {
    this.tryOpen = this.tryOpen.bind(this);
  }

  tryOpen(): void {
    const url = this.generateUrl();
    if (url == null) {
      return;
    }

    this.tryOpenUrl(url);
  }

  async open(): Promise<void> {
    const url = this.generateUrl();
    if (url == null) {
      return;
    }

    await this.tryOpenUrl(url);
  }

  protected async tryOpenUrl(url: string): Promise<void> {
    Linking.openURL(url);
  }

  protected abstract generateUrl(): string | null;
}
