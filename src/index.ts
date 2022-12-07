// console.log('Hello World');
// console.warn('text warn');
// console.error('text error');
// console.info('text info');

// instad of this we can use this

import logger from "../logger";

logger.info("text info");
logger.warn("text warn");
logger.error("text error");
logger.error(new Error("text error")); // with stack trace
logger.info("text info: ");

