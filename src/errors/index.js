const NotFoundError = require("./notFound.error");

module.exports = {
  NotFoundError: require("./notFound.error"),
  InternalServerError: require("./internalServer.error"),
  NotImplementedError: require("./notImplemented.error"),
  BadRequest: require("./badrequest.error"),
};
