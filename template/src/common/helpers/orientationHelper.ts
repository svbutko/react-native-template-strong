import Orientation, {OrientationType} from "react-native-orientation-locker";
import Device from "react-native-device-detection";

export function getCurrentOrientation(): OrientationType {
    let result: OrientationType = Orientation.getInitialOrientation();

    Orientation.getOrientation((orientation) => {
        if (orientation != null) {
            result = orientation;
        }
    });

    return result;
}

export function setDefaultOrientation(): void {
    Device.isPhone ? Orientation.lockToPortrait() : Orientation.unlockAllOrientations();
}
