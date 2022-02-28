import Config from "react-native-config";
import {EnvironmentType, IAppSettings} from "./appSettings";
import {getSettings} from "./getSettings";

class AppSettingsProvider {
  static environment: EnvironmentType = Config.ENVIRONMENT as EnvironmentType;
  private evaluationHandlers: Function[] = [];

  private _settings?: IAppSettings;

  set onSettingsEvaluated(value: Function) {
    this.evaluationHandlers.push(value);
  };

  set environment(value: EnvironmentType) {
    AppSettingsProvider.environment = value;
  };

  get environment(): EnvironmentType {
    return AppSettingsProvider.environment;
  }

  get settings(): IAppSettings {
    if (!this._settings) {
      this._settings = getSettings(AppSettingsProvider.environment);

      this.settings.devOptions.disableReduxLogger = this._settings.devOptions.disableReduxLogger || typeof atob === "undefined";

      this.evaluationHandlers.map(func => {
        try {
          func();
        } catch (e) {
          console.log("onSettingsEvaluated failed", {error: e});
        }
      });

      this.evaluationHandlers = [];
    }

    return this._settings;
  }
}

export const appSettingsProvider = new AppSettingsProvider();
