"use strict";
const bunyan = require("bunyan");
const config = require("config");
const loggerCfg = Object.assign({}, {
    level: config.get('Logger.level'),
    name: config.get('Server.name'),
    serializers: bunyan.stdSerializers,
});
exports.logger = bunyan.createLogger(loggerCfg);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.logger;
//# sourceMappingURL=index.js.map