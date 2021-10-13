import Share, {ShareOptions} from "react-native-share";
import {ShareOpenResult} from "react-native-share/lib/typescript/types";

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

export async function isPackageInstalled(packageName: string) {
  return await Share.isPackageInstalled(packageName);
}
