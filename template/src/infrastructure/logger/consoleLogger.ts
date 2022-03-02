// noinspection JSUnusedGlobalSymbols

import { Logging } from "..";


class ConsoleLogger implements Logging.Logger {
  private minLoggingLevel = Logging.LogLevel.verbose;
  private styles = new Map<Logging.LogLevel, string>();

  constructor(logLevel: Logging.LogLevel = Logging.LogLevel.verbose) {
    this.minLoggingLevel = logLevel;
  }

  private logInternal(logLevel: Logging.LogLevel, message: string, ...info: any[]): void {
    if (this.minLoggingLevel <= logLevel) {
      let method = console.log;
      let modifiedMessage = message;
      let style = this.styles.get(logLevel);

      switch (logLevel) {
        case Logging.LogLevel.verbose:
          method = console.log;
          modifiedMessage = style ? `%c${message}` : `V: ${message}`;
          break;
        case Logging.LogLevel.debug:
          method = console.log;
          modifiedMessage = `D: %c${message}`;
          modifiedMessage = style ? `%c${message}` : `D: ${message}`;
          break;
        case Logging.LogLevel.info:
          method = console.log;
          modifiedMessage = `I: %c${message}`;
          modifiedMessage = style ? `%c${message}` : `I: ${message}`;
          break;
        case Logging.LogLevel.warning:
          method = console.warn;
          style = "";
          break;
        case Logging.LogLevel.error:
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

  setMinLoggingLevel(logLevel: Logging.LogLevel): void {
    this.minLoggingLevel = logLevel;
  }

  logWithLevel(logLevel: Logging.LogLevel, message: string, ...info: any[]): void {
    this.logInternal(logLevel, message, ...info);
  }

  verb(message: string, ...info: any[]): void {
    this.logInternal(Logging.LogLevel.verbose, message, ...info);
  }

  debug(message: string, ...info: any[]): void {
    this.logInternal(Logging.LogLevel.debug, message, ...info);
  }

  info(message: string, ...info: any[]): void {
    this.logInternal(Logging.LogLevel.info, message, ...info);
  }

  warn(message: string, ...info: any[]): void {
    this.logInternal(Logging.LogLevel.warning, message, ...info);
  }

  error(message: string, ...info: any[]): void {
    this.logInternal(Logging.LogLevel.error, message, ...info);
  }

  // own logger method
  setConsoleStyle(LogLevel: Logging.LogLevel, style: string) {
    this.styles.set(LogLevel, style);
  }
}

export const consoleLogger = new ConsoleLogger();
