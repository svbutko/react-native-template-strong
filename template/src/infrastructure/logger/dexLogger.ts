import {HttpLogWriter, ILogEntry, ILogWriter, LogEntryType, Logger as DexLoggerImpl} from "dex-logger";
import {Logger, LogLevel} from "../common/logger";
import {appSettingsProvider} from "~/infrastructure";

class ConsoleWriter implements ILogWriter {
  write(item: ILogEntry): void {
    if (item.Type == LogEntryType.Warning || item.Type == LogEntryType.Exception || item.Type == LogEntryType.Critical) {
      console.log(item.Msg, item.Info);
    }
  }
}

let references: (string[] | undefined) = [];

let dexLoggerWriter: DexLoggerImpl = {
  log: (message: string, info: any) => console.log(`dexLogger (not initialized): ${message}`, info),
  info: (message: string, info: any) => console.log(`dexLogger (not initialized): ${message}`, info),
  warning: (message: string, info: any) => console.log(`dexLogger (not initialized): ${message}`, info),
  exception: (_error: any, message: string, info: any) => console.log(`dexLogger (not initialized): ${message}`, info),
  addReference: (reference: string) => {
    references?.push(reference);
  },
  clearReferences: () => {
    /* ignored */
  },
} as any;

appSettingsProvider.onSettingsEvaluated = () => {
  const writers: ILogWriter[] = [];
  const predicate = appSettingsProvider.settings.environment == "Production"
    ? (entry: ILogEntry): boolean =>
      entry.Type == LogEntryType.Critical
      || entry.Type == LogEntryType.Exception
      || entry.Type == LogEntryType.Warning
    : (): boolean => true;

  if (appSettingsProvider.settings.loggerUrl.startsWith("http")) {
    const httpLogWriter = new HttpLogWriter(
      appSettingsProvider.settings.loggerUrl,
      fetch,
      (error): void => console.log(error), predicate,
    );
    writers.push(httpLogWriter);
    writers.push(new ConsoleWriter());
  }

  dexLoggerWriter = new DexLoggerImpl(writers, [`${appSettingsProvider.settings.appName}.Mobile`], references);
  references = undefined;
};

class DexLogger implements Logger {
  private minLoggingLevel = LogLevel.verbose;

  constructor(logLevel: LogLevel = LogLevel.verbose) {
    this.minLoggingLevel = logLevel;
  }

  private logInternal(logLevel: LogLevel, message: string, ...info: any[]): void {
    if (this.minLoggingLevel <= logLevel) {
      switch (logLevel) {
        case LogLevel.verbose:
          dexLoggerWriter.log(message, {info});
          break;
        case LogLevel.debug:
          dexLoggerWriter.log(message, {info});
          break;
        case LogLevel.info:
          dexLoggerWriter.info(message, {info});
          break;
        case LogLevel.warning:
          dexLoggerWriter.warning(message, {info});
          break;
        case LogLevel.error:
          const error = new Error(message);
          dexLoggerWriter.exception(error, message, {info});
          break;
        default:
          break;
      }
    }
  }

  setMinLoggingLevel(logLevel: LogLevel): void {
    this.minLoggingLevel = logLevel;
  }

  logWithLevel(logLevel: LogLevel, message: string, ...info: any[]): void {
    this.logInternal(logLevel, message, ...info);
  }

  verb(message: string, ...info: any[]): void {
    this.logInternal(LogLevel.verbose, message, ...info);
  }

  debug(message: string, ...info: any[]): void {
    this.logInternal(LogLevel.debug, message, ...info);
  }

  info(message: string, ...info: any[]): void {
    this.logInternal(LogLevel.info, message, ...info);
  }

  warn(message: string, ...info: any[]): void {
    this.logInternal(LogLevel.warning, message, ...info);
  }

  error(message: string, ...info: any[]): void {
    this.logInternal(LogLevel.error, message, ...info);
  }

  // own logger method
  addReference(reference: string) {
    dexLoggerWriter.addReference(reference);
  }

  clearReferences() {
    dexLoggerWriter.clearReferences();
  }
}

export const dexLogger = new DexLogger();


