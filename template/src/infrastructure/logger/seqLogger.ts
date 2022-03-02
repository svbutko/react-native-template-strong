import _ from "lodash";
import {Logging} from "..";
import moment from "moment";

interface ISeqLoggerConfig {
  minLoggingLevel: Logging.LogLevel;
  url: string;
  isFullUrl?: boolean;
  debounce?: number;
  constantlyPassingParams?: Object;
  onFlushError?: (error: any) => void;
  onFlushSuccess?: (result: any) => void;
}

// noinspection JSUnusedGlobalSymbols
class SeqLogger implements Logging.Logger {
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
          "Accept": "*/*"
        },
      }),
    )
      .then((r) => this.config.onFlushSuccess && this.config.onFlushSuccess(r))
      .catch((e) => this.config.onFlushError && this.config.onFlushError(e));

    this.logs = [];
  }

  private logInternal(logLevel: Logging.LogLevel, message: string, ...info: any[]): void {
    if (this.config.minLoggingLevel <= logLevel) {
      let level: string; //@l

      switch (logLevel) {
        case Logging.LogLevel.verbose:
          level = "verbose";
          break;
        case Logging.LogLevel.debug:
          level = "debug";
          break;
        case Logging.LogLevel.info:
          level = "info";
          break;
        case Logging.LogLevel.warning:
          level = "warning";
          break;
        case Logging.LogLevel.error:
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

  setMinLoggingLevel(logLevel: Logging.LogLevel): void {
    this.config.minLoggingLevel = logLevel;
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
}

export const createSeqLogger = (config: ISeqLoggerConfig) => new SeqLogger(config);
