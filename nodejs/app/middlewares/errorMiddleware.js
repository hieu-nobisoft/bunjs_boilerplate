import ErrorHandler from './ErrorClass.js';
import logger from "#logger";

export const notFound = (req, res, next) => {
    next(ErrorHandler.notFoundError(`Not found - ${req.originalUrl}`));
};

export const errorHandler = (err, req, res, next) => {
    if (err instanceof ErrorHandler) {
        res.status(err.status).json({
            success: false,
            message: err.message,
            status: err.status,
            redirect: err.redirect
        });
    } else {
        res.status(500).json({
            success: false,
            message: err.message,
            status: err.status || 500
        });
    }
    logger.error(err.message);
};
