"use strict";
const healthcheck = (req, res, next) => {
    res.send(200);
    return next();
};
exports.bootstrap = (server) => {
    server.head('/healthcheck', healthcheck);
    server.get('/healthcheck', healthcheck);
};
//# sourceMappingURL=index.js.map