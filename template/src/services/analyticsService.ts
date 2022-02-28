import analytics from "@react-native-firebase/analytics";
import {appSettingsProvider, logger} from "../infrastructure";

class AnalyticsService {
  static showAnalyticsLogs = true;

  logEvent(name: string, params?: {[key: string]: any}) {
    if (!__DEV__) {
      analytics().logEvent(name, params);
    } else {
      AnalyticsService.showAnalyticsLogs && logger.verb(`Event: ${name} suppressed`, {params});
    }
  }
}

export const analyticsService = new AnalyticsService();

appSettingsProvider.onSettingsEvaluated = () => {
  AnalyticsService.showAnalyticsLogs = appSettingsProvider.settings.devOptions.showAnalyticsDebugLogs;
};
