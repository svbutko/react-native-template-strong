import {Linking} from "react-native";
import {ignorePromise} from "../utils";
import {throwError} from "../utils";
import {localization} from "../localization";

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
        const canOpen = await Linking.canOpenURL(url);
        if (canOpen) {
            ignorePromise(Linking.openURL(url));
        } else {
            throwError(localization.errors.failedToOpenUrl);
        }
    }

    protected abstract generateUrl(): string | null;

}
