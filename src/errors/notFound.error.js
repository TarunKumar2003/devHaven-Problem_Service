const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");



class NotFoundError extends BaseError{
    constructor(resoName, resoValue){
        super("Not Found", StatusCodes.NOT_FOUND, `The requested resourcw ${resoName} with value ${resoValue} not found`, {
            resoName,
            resoValue
        });
    }
}

module.exports = NotFoundError;