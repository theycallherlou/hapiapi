import { createLogger, format, transports } from 'winston';
import path from 'path';
import fs from 'fs';

const timestamp = new Date().toISOString().replace(/:/g, '-');

const logDirectory = path.join(__dirname, '../../logs');

if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}

const logFormat = format.combine(
  format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  format.printf(({ timestamp, level, message, stack }) => {
    if (stack) {
      return `${timestamp} [${level}]: ${message} - ${stack}`;
    }
    return `${timestamp} [${level}]: ${message}`;
  })
);

const logger = createLogger({
  level: 'info',
  format: logFormat,
  transports: [
    new transports.Console({
      format: format.combine(format.colorize(), format.simple())
    }),

    new transports.File({
      filename: path.join(
        logDirectory,
        `application-log-${timestamp}.log`
      )
    }),

    new transports.File({
      filename: path.join(logDirectory, `error-log-${timestamp}.log`),
      level: 'error'
    })
  ]
});

export default logger;
