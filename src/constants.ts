// =========
// CONSTANTS
// =========

/** The port number that the server will listen to */
export const PORT = process.env.PORT || 3000;

/** The name of the static folder */
export const STATIC_FOLDER = 'static';

/** The log level for the logger */
export const LOG_LEVEL = process.env.LOG_LEVEL ?? process.env.NODE_ENV === 'production' ? 'combined' : 'dev';

/** The database path */
export const DATABASE_PATH = process.env.DATABASE_PATH ?? 'static/quotes.json';
