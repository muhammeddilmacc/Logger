import { createLogger, format, transports} from "winston";

const logFormat = format.printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} ${level}: ${stack || message}}`;
});

const logger = createLogger({
  format: format.combine(
    format.colorize(),
    format.timestamp({ format: "YYYY-MM-DD HH:mm" }),
    logFormat,
    format.errors({ stack: true})
  ),
  // defaultMeta: { service: "user-service" },
  transports: [new transports.Console()],
});

export default logger;
