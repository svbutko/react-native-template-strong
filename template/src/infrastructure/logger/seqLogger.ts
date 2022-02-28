import _ from "lodash";
import moment from "moment";
import {Logger, LogLevel} from "../common/logger";

interface ISeqLoggerConfig {
  minLoggingLevel: LogLevel;
  url: string;
  isFullUrl?: boolean;
  debounce?: number;
  constantlyPassingParams?: Object;
  onFlushError?: (error: any) => void;
  onFlushSuccess?: (result: any) => void;
}

// noinspection JSUnusedGlobalSymbols
class SeqLogger implements Logger {
  private config: ISeqLoggerConfig;
  private flushDebounced: () => void;
  private logs: Object[] = [];

  constructor(config: ISeqLoggerConfig) {
    this.config = config;
    this.flushDebounced = _.debounce(this.flush, this.config.debounce || 1000).bind(this);
    this.logInternal = this.logInternal.bind(this);
  }

  private flush(): void {
    const stringLogEntries = this.logs.map(entry => JSON.stringify(entry));
    const payload = stringLogEntries.join("\n");

    const logUrl = this.config.isFullUrl
      ? this.config.url
      : `${this.config.url}/api/events/raw?clef`;

    fetch(
      logUrl,
      Object.assign({
        method: "POST",
        body: payload,
      }, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "*/*",
        },
      }),
    )
      .then((r) => this.config.onFlushSuccess && this.config.onFlushSuccess(r))
      .catch((e) => this.config.onFlushError && this.config.onFlushError(e));

    this.logs = [];
  }

  private logInternal(logLevel: LogLevel, message: string, ...info: any[]): void {
    if (this.config.minLoggingLevel <= logLevel) {
      let level: string; //@l

      switch (logLevel) {
        case LogLevel.verbose:
          level = "verbose";
          break;
        case LogLevel.debug:
          level = "debug";
          break;
        case LogLevel.info:
          level = "info";
          break;
        case LogLevel.warning:
          level = "warning";
          break;
        case LogLevel.error:
          level = "error";
          break;
        default:
          level = "verbose";
          break;
      }

      const entry = Object.assign(
        {
          "@t": moment().utc().format(),
          "@l": level,
          "@mt": message,
        },
        info,
        this.config.constantlyPassingParams || {},
      );
      this.logs.push(entry);
      this.flushDebounced();
    }
  }

  setMinLoggingLevel(logLevel: LogLevel): void {
    this.config.minLoggingLevel = logLevel;
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
}

export const createSeqLogger = (config: ISeqLoggerConfig) => new SeqLogger(config);
