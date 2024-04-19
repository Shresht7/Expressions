// Library
import type { Request, Response, NextFunction } from 'express';
import type { ErrorResponse, APIError } from '../types';

/**
 * Express middleware function to handle errors.
 * 
 * Middleware with an arity of 4 are considered error-handling middlewares.
 * When you next(err) from a request handler, the app will proceed to the next error handler (ignoring non-error handlers).
 * 
 * @param err - The API error object.
 * @param req - The Express request object.
 * @param res - The Express response object.
 * @param next - The next middleware function.
 */
export function errorHandler(err: APIError, req: Request, res: Response<ErrorResponse>, next: NextFunction) {

    // Determine the response status code
    const code = err.statusCode ?? res.statusCode ?? 500;

    // Send the error response
    res.status(code).json({
        error: err.message,
        stack: process.env.NODE_ENV === 'production' ? '' : err.stack,
    });

}
