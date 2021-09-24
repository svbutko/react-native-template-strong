import {PressableProps, ViewStyle} from "react-native";
import {RehydrateAction} from "redux-persist";
import {RootState} from "../core/store/rootReducer";
import {TextInputMaskOptionProp, TextInputMaskTypeProp} from "react-native-masked-text";
import {SFSymbols} from "../../resources/symbols/SFSymbols";

export interface INavigationPage {
  id: string;
  name: string;
}

export interface IOnboardingData {
  header: string;
  body: string;
  icon: SFSymbols | string;
}

export enum LoadState {
  needLoad = "needLoad",
  idle = "idle",
  error = "error",
  allIsLoaded = "allIsLoaded",

  firstLoad = "firstLoad",
  pullToRefresh = "pullToRefresh",
  refreshing = "refreshing",
  loadingMore = "loadingMore",
}

export interface TouchablePlatformProps extends Omit<PressableProps, "style"> {
  style?: ViewStyle;
}

export enum ButtonType {
  solid = "solid",
  borderless = "borderless",
  outline = "outline",
  outlineNegative = "outlineNegative",
}

export interface IReduxMeta<T> {
  requestId: string;
  arg: T;
}

export interface IListState<T> {
  data: T[];
  loadState: LoadState;
  error: string | null;
}

export interface ISection<T> {
  data: T[];
  id: string;
  title: string;
}

export interface RehydrateAppAction extends RehydrateAction {
  payload?: RootState;
}

export enum ErrorRepresentationType {
  input = "input",
  toast = "toast",
  alert = "alert",
}

export interface IErrorResult {
  message: string;
  visualRepresentation: ErrorRepresentationType;
}

export interface ITextInputMask {
  type: TextInputMaskTypeProp;
  options?: TextInputMaskOptionProp;
  maxLength?: number;
}

export interface ISize {
  extraSmall: number;
  extraSmallPlus: number;
  small: number;
  smallPlus: number;
  medium: number;
  mediumPlus: number;
  large: number;
  largePlus: number;
  extraLarge: number;
  extraLargePlus: number;
}
