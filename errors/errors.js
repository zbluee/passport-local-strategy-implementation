import {StatusCodes} from 'http-status-codes';

class CustomError extends Error {
    constructor(message){
        super(message)
    }
}

class UnauthenticationError extends CustomError {
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.UnauthenticationError
    }
}

class BadRequestError extends CustomError {
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}

export {CustomError, UnauthenticationError, BadRequestError}