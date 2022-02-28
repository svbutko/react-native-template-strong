import {Logger, LogLevel} from "../common/logger";

// noinspection JSUnusedGlobalSymbols
class ConsoleLogger implements Logger {
  private minLoggingLevel = LogLevel.verbose;
  private styles = new Map<LogLevel, string>();

  constructor(logLevel: LogLevel = LogLevel.verbose) {
    this.minLoggingLevel = logLevel;
  }

  private logInternal(logLevel: LogLevel, message: string, ...info: any[]): void {
    if (this.minLoggingLevel <= logLevel) {
      let method = console.log;
      let modifiedMessage = message;
      let style = this.styles.get(logLevel);

      switch (logLevel) {
        case LogLevel.verbose:
          method = console.log;
          modifiedMessage = style ? `%c${message}` : `V: ${message}`;
          break;
        case LogLevel.debug:
          method = console.log;
          modifiedMessage = `D: %c${message}`;
          modifiedMessage = style ? `%c${message}` : `D: ${message}`;
          break;
        case LogLevel.info:
          method = console.log;
          modifiedMessage = `I: %c${message}`;
          modifiedMessage = style ? `%c${message}` : `I: ${message}`;
          break;
        case LogLevel.warning:
          method = console.warn;
          style = "";
          break;
        case LogLevel.error:
          method = console.error;
          style = "";
          break;
        default:
          break;
      }

      if (!style) {
        if (info) {
          method(modifiedMessage, ...info);
        } else {
          method(modifiedMessage);
        }
      } else {
        if (info) {
          method(modifiedMessage, style, ...info);
        } else {
          method(modifiedMessage, style);
        }
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
  setConsoleStyle(logLevel: LogLevel, style: string) {
    this.styles.set(logLevel, style);
  }
}

export const consoleLogger = new ConsoleLogger();
