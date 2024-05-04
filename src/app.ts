// Library
import express from 'express';
import morgan from 'morgan';
import _helmet from 'helmet';
import cors from 'cors';

// Routers
import api from './api';

// Middlewares
import * as middlewares from './middlewares';

// Constants
import { STATIC_FOLDER, LOG_LEVEL, PRODUCTION_ENVIRONMENT } from './constants';

// Create a new express application instance
const app = express();

// ===========
// Middlewares
// ===========

/** Helmet Middleware Configuration */
const helmet = PRODUCTION_ENVIRONMENT
    // Use helmet with the default configuration for production
    ? _helmet()
    // Use helmet with modifications in the development environment
    : _helmet({
        contentSecurityPolicy: {
            directives: {
                // ! The upgradeInsecureRequests directive upgrades any incoming **http** request
                // ! to an **https** request. While a great security measure, it makes all requests
                // ! made on the local network fail because there is no certificate. All http
                // ! requests are automatically upgraded to https which makes them fail.
                // ! This should NOT be used in PRODUCTION!!!
                upgradeInsecureRequests: null
            },
        },
    })

app.use(
    morgan(LOG_LEVEL),
    helmet,
    cors(),
)

// ======
// Static
// ======

/** Name of the static folder */
app.use(express.static(STATIC_FOLDER));

// ======
// Routes
// ======

// API Routes
app.use('/api/v1', api);

// Error-Handling Middlewares
app.use(
    middlewares.notFound,
    middlewares.errorHandler
);

// ----------------
export default app;
// ----------------
