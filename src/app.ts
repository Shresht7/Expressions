// Library
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

// Routers
import api from './api';

// Middlewares
import * as middlewares from './middlewares';

// Constants
import { STATIC_FOLDER, LOG_LEVEL } from './constants';

// Create a new express application instance
const app = express();

// ===========
// Middlewares
// ===========

app.use(
    morgan(LOG_LEVEL),
    helmet(),
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
