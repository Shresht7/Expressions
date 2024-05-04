// =========
// CONSTANTS
// =========

/** The port number that the server will listen to */
export const PORT = process.env.PORT || 3000;

/** The name of the static folder */
export const STATIC_FOLDER = 'static';

/** Is meant for production */
export const PRODUCTION_ENVIRONMENT = process.env.NODE_ENV === 'production'

/** Is a development build */
export const DEVELOPMENT_ENVIRONMENT = process.env.NODE_ENV = 'development'

/** The log level for the logger */
export const LOG_LEVEL = process.env.LOG_LEVEL ?? PRODUCTION_ENVIRONMENT ? 'combined' : 'dev';

/** The database path */
export const DATABASE_PATH = process.env.DATABASE_PATH ?? 'static/quotes.json';
