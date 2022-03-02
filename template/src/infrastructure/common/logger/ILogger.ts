import {LogLevel} from "./LogLevel";

export interface ILogger {
    setMinLoggingLevel(logLevel: LogLevel): void;

    logWithLevel(logLevel: LogLevel, message: string, ...params: any[]): void;

    verb(message: string, ...params: any[]): void;

    debug(message: string, ...params: any[]): void;

    info(message: string, ...params: any[]): void;

    warn(message: string, ...params: any[]): void;

    error(message: string, ...params: any[]): void;
}
