import {ReduxLoggerOptions} from "redux-logger";

export enum EnvironmentType {
  Development = "Development",
  Test = "Test",
  Staging = "Staging",
  Production = "Production",
}

export interface IAppSettings {
  appName: string;
  environment: EnvironmentType;
  serverUrl: string;
  showVersion: boolean;
  devOptions: IDevOptions;
  loggerUrl: string;
}

interface IDevOptions {
  reduxLogger?: ReduxLoggerOptions;
  reduxLoggerWhiteList?: string[];
  purgeStateOnStart: boolean;
  disableReduxLogger: boolean;
  showAnalyticsDebugLogs: boolean;
}
