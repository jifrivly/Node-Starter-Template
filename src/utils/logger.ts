import { createLogger, format, transports } from 'winston';

const {combine, timestamp, colorize, uncolorize, splat, printf} = format;

const enumerateErrorFormat = format((info) => {
    if (info instanceof Error) {
        Object.assign(info, {message: info.stack});
    }
    return info;
});

const customFormat = printf(({level, message, /**label = '',*/ timestamp}) => {
    return `[${timestamp}] ${level}: ${message}`;
});

const Logger = createLogger({
    level: process.env.NODE_ENV === 'development' ? 'debug' : 'info', // Adjust logging level as needed
    format: combine(
        timestamp(),
        enumerateErrorFormat(),
        process.env.NODE_ENV === 'development' ? colorize() : uncolorize(),
        splat(),
        printf(info => `[${info.timestamp}] ${info.level}: ${info.message}`),
        customFormat
    ),
    transports: [
        new transports.Console({
            stderrLevels: ['error'],
        }),
    // Optionally, add other transports for file logging, etc.
    ],
});

export { Logger };
