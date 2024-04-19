// Library
import type { Request, Response, NextFunction } from 'express';
import type { ErrorResponse } from '../types';

/**
 * Express middleware function to handle errors.
 * 
 * Middleware with an arity of 4 are considered error-handling middlewares.
 * When you next(err) from a request handler, the app will proceed to the next error handler (ignoring non-error handlers).
 * 
 * @param err - The error object.
 * @param req - The Express request object.
 * @param res - The Express response object.
 * @param next - The next middleware function.
 */
export function errorHandler(err: Error, req: Request, res: Response<ErrorResponse>, next: NextFunction) {
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    res.status(statusCode);
    res.json({
        error: err.message,
        stack: process.env.NODE_ENV === 'production' ? '' : err.stack,
    });
}
