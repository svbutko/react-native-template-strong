import NetInfo, {NetInfoState, NetInfoSubscription} from "@react-native-community/netinfo";
import {showAlert} from "./dialogsHelpers";
import {Linking} from "react-native";
import Config from "react-native-config";
import {localization} from "../localization/localization";

let netInfoUnsubscribe: undefined | NetInfoSubscription;
let hasDialogBeenShown: boolean = false;

function listenerCallback(state: NetInfoState) {
  if (state.isInternetReachable === false && !hasDialogBeenShown) {
    hasDialogBeenShown = true;
    showAlert(localization.errors.mobileDataIsTurnedOff, localization.errors.turnOnMobileData, [
      {
        text: localization.common.settings,
        onPress: Linking.openSettings,
        style: "default",
      },
      {
        text: localization.common.ok.toUpperCase(),
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
