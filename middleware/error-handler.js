import { StatusCodes } from 'http-status-codes';

const errorHandler =  async (err, req, res, next) => {

    let customError = {
        statusCode : err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        message : err.message || 'something went wrong please try again later.'
    };
    if (err.code === 11000){
        customError.message = `duplicate for the value ${Object.keys(err.keyValue)} failed, please choose another value`;
        customError.statusCode = 400;
    }
    if (err.name === 'ValidationError'){
        customError.message = Object.values(err.errors).map(item => item.message).join(',');
        customError.statusCode = 400;
    }
        
    res.status(customError.statusCode).json({success : false, msg : customError.message});
    
}

export {errorHandler as errorHandlerMiddleware}