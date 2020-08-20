import {BaseUrlOpener} from "./baseUrlOpener";
import {isIos} from "../../core/theme";

export class MapUrl extends BaseUrlOpener {
    constructor(private latitude: number, private longitude: number, private address: string) {
        super();
    }

    protected generateUrl(): string | null {
        let url: string;
        if (isIos) {
            url = `http://maps.apple.com/?q=${encodeURIComponent(this.address)}&sll=${this.latitude},${this.longitude}`;
        } else {
            url = `geo:${this.latitude}, ${this.longitude}`;
        }

        return url;
    }
}