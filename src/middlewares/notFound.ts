// Library
import type { Request, Response, NextFunction } from 'express';

/**
 * Middleware function to handle 404 Not Found errors.
 * Sets the response status to 404 and passes an error to the next (error-handling) middleware.
 *
 * @param req - The Express request object.
 * @param res - The Express response object.
 * @param next - The Express next function.
 */
export function notFound(req: Request, res: Response, next: NextFunction) {
    res.status(404);
    const error = new Error(`Not Found - ${req.originalUrl}`);
    next(error);
}
