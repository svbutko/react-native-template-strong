import * as Logging from "../common/logger";
import {BaseConfigurableModule, IBaseConfiguration} from "./BaseConfigurableModule";

export interface IBaseLoggingModuleConfiguration extends IBaseConfiguration {
  logger: Logging.Logger;
  logLevel?: Logging.LogLevel;
}

interface SaveExecutionResult<T> {
  result?: T;
  error?: unknown;
}

// noinspection JSUnusedGlobalSymbols
export abstract class BaseLoggingModule extends BaseConfigurableModule<IBaseLoggingModuleConfiguration> {
  private logLevel: Logging.LogLevel = Logging.LogLevel.warning;

  protected constructor() {
    super();

    this.logLevel = Logging.LogLevel.error;
  }

  protected configure(params: IBaseLoggingModuleConfiguration) {
    super.configure(params);
    this.setMinLoggingLevel(params.logLevel ?? this.logLevel);
    this.logVerb(`Module ${this.constructor.name} configured.`);
  }

  get minLoggingLevel() {
    return this.logLevel;
  };

  setMinLoggingLevel(logLevel: Logging.LogLevel): void {
    this.logLevel = logLevel;
  }

  public logWithLevel(logLevel: Logging.LogLevel, message: string, ...info: any[]): void {
    this.log(logLevel, message, ...info);
  }

  public logVerb(message: string, ...info: any[]): void {
    this.log(Logging.LogLevel.verbose, message, ...info);
  }

  public logDebug(message: string, ...info: any[]): void {
    this.log(Logging.LogLevel.debug, message, ...info);
  }

  public logInfo(message: string, ...info: any[]): void {
    this.log(Logging.LogLevel.info, message, ...info);
  }

  public logWarn(message: string, ...info: any[]): void {
    this.log(Logging.LogLevel.warning, message, ...info);
  }

  public logError(message: string, ...info: any[]): void {
    this.log(Logging.LogLevel.error, message, ...info);
  }

  private log(logLevel: Logging.LogLevel, message: string, ...info: any[]) {
    const configuration = this.configuration;
    if (configuration && this.logLevel <= logLevel) {
      configuration.logger.logWithLevel(logLevel, `${this.constructor.name} module: ${message}`, ...info);
    }
  }

  protected safeExecuteAsync<T>(
    action?: () => Promise<T>,
    callback?: (result: SaveExecutionResult<T>) => void,
    fallbackValue?: T,
  ): void {
    this.logVerb("safeAsyncExecute started");

    if (action) {
      action()
        .then((result) => {
          this.logVerb(`safeAsyncExecute action was resolved`);
          callback && callback({result});
        })
        .catch((error) => {
          this.logDebug("safeAsyncExecute action was rejected", error);
          callback && callback({error, result: fallbackValue});
        });
    } else {
      this.logVerb("safeAsyncExecute action is empty");
    }

    this.logVerb("safeAsyncExecute completed");
  }

  protected safeExecute<T>(action?: () => T, fallbackValue?: T): SaveExecutionResult<T> {
    this.logVerb("safeExecute started");
    let result = fallbackValue;
    let error: unknown | undefined;

    if (action) {
      try {
        result = action();
        this.logVerb("safeExecute action was resolved");
      } catch (err) {
        this.logDebug("safeExecute action was rejected", err);
        error = err;
      }
    } else {
      this.logVerb("safeExecute action is empty");
      error = new Error("safeExecute action is empty");
    }

    this.logVerb("safeExecute completed");

    return {
      result,
      error,
    };
  }
}
