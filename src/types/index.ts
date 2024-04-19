// ================
// TYPE DEFINITIONS
// ================

export type MessageResponse = {
    message: string;
}

export type ErrorResponse = {
    error: string;
    stack?: string;
}

/**
 * Represents an error that occurs in the API.
 * Extends the built-in Error class and includes a status code.
 * 
 * @param message - The error message.
 * @param statusCode - The status code for the error response.
 * @example
 * throw new APIError('Something bad happened', 400);
 * throw new APIError('Something bad happened'); // Defaults to 500 (Internal Server Error)
 */
export class APIError extends Error {
    constructor(
        message: string,
        /** The status code for the error response */
        public readonly statusCode: number = 500 // Default to 500 (Internal Server Error)
    ) {
        super(message);
    }
}
