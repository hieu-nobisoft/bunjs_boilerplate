import winston from "winston";

const logger = winston.createLogger({
  handleExceptions: true,
  level: "info",
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    //

  ],
  exitOnError: false,
});

const alignColorsAndTime = winston.format.combine(
  winston.format.colorize({
    all: true,
  }),
  winston.format.timestamp({
    format: "YY-MM-DD HH:mm:ss",
  }),
  winston.format.printf((info) => {
    if (info.label) {
      return `${info.timestamp} ${info.level} [${info.label}] : ${info.message}`;
    }
    return `${info.timestamp} ${info.level}: ${info.message}`;
  })
);

logger.stream = {
  write(message, encoding) {
    logger.info(message);
  },
};

logger.getLogger = function (context) {
  return logger.child({ label: context });
};

if (process.env.NODE_ENV !== "prod") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize({ all: true }),
        alignColorsAndTime
        // winston.format.printf((msg) => {
        //     colorizer.colorize(msg.level, `${msg.timestamp} - ${msg.level}: ${msg.message}`);
        // })
      ),
      handleExceptions: true,
      json: false,
      level: "debug",
      exitOnError: false,
    })
  );
} else {
  logger.add(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize({ all: true }),
        alignColorsAndTime
        // winston.format.printf((msg) => {
        //     colorizer.colorize(msg.level, `${msg.timestamp} - ${msg.level}: ${msg.message}`);
        // })
      ),
      handleExceptions: true,
      json: false,
      level: "info",
      exitOnError: false,
    })
  );

}

export default logger;
