const split = require('split');
const { createLogger, format, transports } = require('winston');
const { APP_NAME } = require('../config/settings');

const {
  combine, timestamp, label, printf,
} = format;

const myFormat = printf((info) => {
  if (process.env.APP_ENV !== 'production') {
    return `[${info.timestamp}] > ${info.label} < ${info.level.toUpperCase()} => ${info.message}`;
  }

  return `[${info.timestamp}]:${info.label}:${info.level.toUpperCase()}:${info.message}`;
});

const logger = createLogger({
  format: combine(
    label({ label: APP_NAME }),
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss.SSSS',
    }),
    myFormat,
  ),
  transports: [
    new transports.Console({
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true,
    }),
  ],
  exitOnError: false,
});

module.exports.Logger = logger;
module.exports.stream = split().on('data', (message) => {
  logger.info(message);
});
