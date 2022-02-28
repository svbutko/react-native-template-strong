import {Logger, LogLevel} from "../common/logger";

const loggers: Logger[] = [];

// noinspection JSUnusedGlobalSymbols
class MultiLogger implements Logger {
  private minLoggingLevel: LogLevel | undefined;

  constructor(logLevel?: LogLevel) {
    this.minLoggingLevel = logLevel;
  }

  addLogger(logger: Logger) {
    loggers.push(logger);

    if (this.minLoggingLevel) {
      logger.setMinLoggingLevel(this.minLoggingLevel);
    }
  }

  setMinLoggingLevel(logLevel: LogLevel): void {
    loggers.map(logger => logger.setMinLoggingLevel(logLevel));
  }

  logWithLevel(logLevel: LogLevel, message: string, ...info: any[]): void {
    loggers.map(logger => logger.logWithLevel(logLevel, message, ...info));
  }

  log(message: string, ...info: any[]): void {
    loggers.map(logger => logger.logWithLevel(LogLevel.debug, message, ...info));
  }

  verb(message: string, ...info: any[]): void {
    loggers.map(logger => logger.verb(message, ...info));
  }

  debug(message: string, ...info: any[]): void {
    loggers.map(logger => logger.debug(message, ...info));
  }

  info(message: string, ...info: any[]): void {
    loggers.map(logger => logger.info(message, ...info));
  }

  warn(message: string, ...info: any[]): void {
    loggers.map(logger => logger.warn(message, ...info));
  }

  error(message: string, ...info: any[]): void {
    loggers.map(logger => logger.error(message, ...info));
  }

}

export const logger = new MultiLogger();
