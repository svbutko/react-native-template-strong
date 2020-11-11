import {Navigation} from "react-native-navigation";
import {Pages} from "./pages";
import {Platform, PlatformColor} from "react-native";
import {isAndroid, PlatformColorsAndroid, PlatformColorsIOS} from "../core/theme";
import {Demo} from "../modules/demo/Demo";
import {More} from "../modules/more/More";
import {localization} from "../common/localization";
import {Main} from "../modules/main/Main";

export function setDefaultOptions() {
    Navigation.setDefaultOptions({
        layout: {
            ...Platform.select({
                ios: {
                    componentBackgroundColor: PlatformColor(PlatformColorsIOS.systemBackground),
                },
                android: {
                    componentBackgroundColor: PlatformColor(PlatformColorsAndroid.darkerGray),
                },
            }),
        },
        topBar: {
            animate: true,
            drawBehind: !isAndroid,
            background: {
                translucent: true,
            },
            largeTitle: {
                visible: true,
            },
            searchBar: {
                visible: true,
                hideOnScroll: true,
                hideTopBarOnFocus: true,
                obscuresBackgroundDuringPresentation: true,
            },
            hideNavBarOnFocusSearchBar: true,
            searchBarHiddenWhenScrolling: true,
            searchBarPlaceholder: localization.common.search,
            noBorder: true,
        },
        bottomTabs: {
            hideShadow: true,
            translucent: true,
        },
        bottomTab: {
            ...Platform.select({
                ios: {
                    selectedTextColor: PlatformColor(PlatformColorsIOS.systemBlue),
                    textColor: PlatformColor(PlatformColorsIOS.label),
                },
                android: {
                    textColor: PlatformColor(PlatformColorsAndroid.darkerGray),
                },
            }),
        },
    });
}

export function registerComponents() {
    Navigation.registerComponent(Pages.main.name, () => Main);
    Navigation.registerComponent(Pages.demo.name, () => Demo);
    Navigation.registerComponent(Pages.more.name, () => More);
}
