// Library
import type { Request, Response, NextFunction } from 'express';
import { APIError } from '../types';

/**
 * Middleware function to handle 404 Not Found errors.
 * Sets the response status to 404 and passes an error to the next (error-handling) middleware.
 *
 * @param req - The Express request object.
 * @param res - The Express response object.
 * @param next - The Express next function.
 */
export function notFound(req: Request, res: Response, next: NextFunction) {
    throw new APIError(`Not Found - ${req.originalUrl}`, 404);
}
