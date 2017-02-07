"use strict";
const config = require("config");
const restify = require("restify");
const logger_1 = require("./logger");
const routes_1 = require("./routes");
exports.server = restify.createServer();
routes_1.bootstrap(exports.server);
const serverName = config.get('Server.name');
const port = config.get('Server.port');
exports.server.listen(port, () => logger_1.logger.info(`${serverName} started and listening on port ${port}`));
//# sourceMappingURL=server.js.map