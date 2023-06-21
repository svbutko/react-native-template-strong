import Orientation, {OrientationType} from 'react-native-orientation-locker';
import {isTablet} from '../../core/theme/commonConsts';

export function getCurrentOrientation(forceOnPhone?: boolean): OrientationType {
  if (isTablet || forceOnPhone) {
    let result = Orientation.getInitialOrientation();
    Orientation.getOrientation(orientation => {
      if (orientation != null) {
        result = orientation;
      }
    });

    return result;
  } else {
    return 'PORTRAIT' as OrientationType;
  }
}

export function setDefaultOrientation(): void {
  if (isTablet) {
    Orientation.unlockAllOrientations();
  } else {
    Orientation.lockToPortrait();
  }
}
