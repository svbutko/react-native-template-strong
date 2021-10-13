import {Linking} from "react-native";
import Share, {ShareOptions} from "react-native-share";
import {ShareOpenResult, ShareSingleOptions, ShareSingleResult} from "react-native-share/lib/typescript/types";
import {isAndroid, isIos} from "../../core/theme/commonConsts";

export async function showShareDialog(
  options: ShareOptions,
  completedCallback?: (result: ShareOpenResult) => void,
  errorCallback?: (error: Error | unknown) => void,
) {
  try {
    const result = await Share.open(options);
    completedCallback?.(result);
  } catch (error: Error | unknown) {
    errorCallback?.(error);
  }
}

export async function showShareSocialDialog(
  options: ShareSingleOptions,
  completedCallback?: (result: ShareSingleResult) => void,
  errorCallback?: (error: Error | unknown) => void,
) {
  try {
    const result = await Share.shareSingle(options);
    completedCallback?.(result);
  } catch (error: Error | unknown) {
    errorCallback?.(error);
  }
}

export async function isPackageInstalled(androidPackageName?: string, iosUrl?: string): Promise<boolean> {
  if (isAndroid && androidPackageName) {
    return (await Share.isPackageInstalled(androidPackageName)).isInstalled;
  } else if (isIos && iosUrl) {
    return Linking.canOpenURL(iosUrl);
  } else {
    throw new Error("No arguments were given or the platform is not supported");
  }
}
