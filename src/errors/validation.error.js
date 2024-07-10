const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class ValidationError extends BaseError {
  constructor(message = "Invalid Input") {
    super(message, StatusCodes.BAD_REQUEST);
  }
}

module.exports = ValidationError;
