import * as bunyan from 'bunyan';
import * as config from 'config';

const loggerCfg = Object.assign({}, {
  level: config.get('Logger.level'),
  name: config.get('Server.name'),
  serializers: bunyan.stdSerializers,
}) as bunyan.LoggerOptions;

export const logger = bunyan.createLogger(loggerCfg);

export default logger;
