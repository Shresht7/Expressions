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
 * @param code - The status code for the error response.
 * @param message - The error message.
 * @example
 * throw new APIError(400, 'Something bad happened');
 * throw new APIError('Something bad happened'); // Defaults to 500 (Internal Server Error)
 */
export class APIError extends Error {

    /** The status code for the error response */
    public readonly statusCode: number; // Default to 500 (Internal Server Error)

    constructor(message: string)
    constructor(code: number, message: string)
    constructor(codeOrMessage: number | string, message?: string) {

        // Determine the code and message parameters
        let code: number;
        if (typeof codeOrMessage === 'number') {
            code = codeOrMessage;
        } else {
            code = 500;
            message = codeOrMessage;
        }

        // Call the base Error constructor and set the status code
        super(message);
        this.statusCode = code;

    }
}
