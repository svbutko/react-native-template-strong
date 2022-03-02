import {Logging} from "../";

const loggers: Logging.Logger[] = [];

// noinspection JSUnusedGlobalSymbols
class MultiLogger implements Logging.Logger {
    private minLoggingLevel: Logging.LogLevel | undefined;

    constructor(logLevel?: Logging.LogLevel) {
        this.minLoggingLevel = logLevel;
    }

    addLogger(logger: Logging.Logger) {
        loggers.push(logger);

        if (this.minLoggingLevel) {
            logger.setMinLoggingLevel(this.minLoggingLevel);
        }
    }

    setMinLoggingLevel(logLevel: Logging.LogLevel): void {
        loggers.map(logger => logger.setMinLoggingLevel(logLevel));
    }

    logWithLevel(logLevel: Logging.LogLevel, message: string, ...info: any[]): void {
        loggers.map(logger => logger.logWithLevel(logLevel, message, ...info));
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

export const multiLogger = new MultiLogger();
