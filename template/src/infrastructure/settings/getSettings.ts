/* eslint-disable @typescript-eslint/no-var-requires */
import {EnvironmentType, IAppSettings} from "./appSettings";

export const getSettings = (environment: EnvironmentType): IAppSettings => {
  // @ts-ignore
  if (require.resolve) {
    // @ts-ignore
    delete require.cache[require.resolve("../../../resources/settings/mobileSettings.json")];
  }
  let mobileSettings: IAppSettings = require("../../../resources/settings/mobileSettings.json");

  let environmentSettings: IAppSettings;
  switch (environment) {
    case "Development":
      environmentSettings = require("../../../resources/settings/mobileSettings.Development.json");
      break;
    case "Test":
      environmentSettings = require("../../../resources/settings/mobileSettings.Test.json");
      break;
    case "Staging":
      environmentSettings = require("../../../resources/settings/mobileSettings.Staging.json");
      break;
    case "Production":
      environmentSettings = require("../../../resources/settings/mobileSettings.Production.json");
      break;
    default:
      throw new Error(`Not found settings for environment '${mobileSettings.environment}'`);

  }
  let devOptions = mobileSettings.devOptions;
  mobileSettings = Object.assign(mobileSettings, environmentSettings);
  mobileSettings.devOptions = {...devOptions, ...environmentSettings.devOptions};

  if (typeof __DEV__ != "undefined" && __DEV__) {
    try {
      const localSettings = require("../../../resources/settings/localSettings.json");
      devOptions = mobileSettings.devOptions;
      mobileSettings = Object.assign(mobileSettings, localSettings);

      mobileSettings.devOptions = {...devOptions, ...localSettings.devOptions};
    } catch {
      console.warn("No local settings found");
    }
  }

  return mobileSettings;
};
