const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");


class InternalServerError extends BaseError{
    constructor(details){
        super("Internal Server Error", StatusCodes.InternalServerError, "Something went wrong !!", details);
    }
}

module.exports = InternalServerError;