import {consoleLogger, logger} from "../infrastructure/logger";
import Config from "react-native-config";
import {AppEnvironment} from "~/types/react-native-config.types";
import {Colors} from "~/core/theme/colors";
import {dexLogger} from "~/infrastructure/logger/dexLogger";
import {LogLevel} from "~/infrastructure/common/logger/LogLevel";

export function configureLogger() {
  let consoleLogLevel: LogLevel;
  let dexLogLevel: LogLevel;
  switch (Config.ENVIRONMENT) {
    case AppEnvironment.development:
      consoleLogLevel = LogLevel.verbose;
      dexLogLevel = LogLevel.verbose;
      break;
    case AppEnvironment.test:
      consoleLogLevel = LogLevel.info;
      dexLogLevel = LogLevel.debug;
      break;
    case AppEnvironment.staging:
      consoleLogLevel = LogLevel.info;
      dexLogLevel = LogLevel.info;
      break;
    case AppEnvironment.production:
      consoleLogLevel = LogLevel.warning;
      dexLogLevel = LogLevel.warning;
      break;
    default:
      consoleLogLevel = LogLevel.verbose;
      dexLogLevel = LogLevel.verbose;
  }

  const verboseStyle = `color: #ccc; font-size: 10px; margin: -2px; margin-left: 2px`;

  consoleLogger.setConsoleStyle(LogLevel.verbose, verboseStyle);
  consoleLogger.setConsoleStyle(LogLevel.debug, `color: ${Colors.red}`);
  consoleLogger.setConsoleStyle(LogLevel.info, `color: ${Colors.red}; font-weight: 600`);

  // do not show console logs in production
  if (__DEV__) {
    consoleLogger.setMinLoggingLevel(consoleLogLevel);
    logger.addLogger(consoleLogger);
  }

  dexLogger.setMinLoggingLevel(dexLogLevel);
  logger.addLogger(dexLogger);
}
