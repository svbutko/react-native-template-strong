import NetInfo, {NetInfoState, NetInfoSubscription} from "@react-native-community/netinfo";
import {showAlert} from "./dialogsHelpers";
import {Linking} from "react-native";
import Config from "react-native-config";
import {i18next} from "~/common/localization/localization";

let netInfoUnsubscribe: undefined | NetInfoSubscription;
let hasDialogBeenShown: boolean = false;

function listenerCallback(state: NetInfoState) {
  if (state.isInternetReachable === false && !hasDialogBeenShown) {
    hasDialogBeenShown = true;
    showAlert(i18next.t("errors.mobileDataIsTurnedOff"), i18next.t("errors.turnOnMobileData"), [
      {
        text: i18next.t("common.settings"),
        onPress: Linking.openSettings,
        style: "default",
      },
      {
        text: i18next.t("common.ok").toUpperCase(),
        style: "default",
      },
    ]);
  }
}

export function startListeningToNetInfo() {
  if (netInfoUnsubscribe == null && !Config.IGNORE_NET_INFO) {
    netInfoUnsubscribe = NetInfo.addEventListener(listenerCallback);
  }
}

export function unsubscribeFromNetInfo() {
  netInfoUnsubscribe && netInfoUnsubscribe();
}
