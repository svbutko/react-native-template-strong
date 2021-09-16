import Orientation, {OrientationType} from "react-native-orientation-locker";
import Device from "react-native-device-detection";

export function getCurrentOrientation(forceOnPhone?: boolean): OrientationType {
  if (!Device.isPhone || forceOnPhone) {
    let result = Orientation.getInitialOrientation();
    Orientation.getOrientation((orientation) => {
      if (orientation != null) {
        result = orientation;
      }
    });

    return result;
  } else {
    return "PORTRAIT" as OrientationType;
  }
}

export function setDefaultOrientation(): void {
  if (Device.isPhone) {
    Orientation.lockToPortrait();
  } else {
    Orientation.unlockAllOrientations();
  }
}
