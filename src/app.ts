// Library
import express, { Request, Response } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

// Routers
import api from './api';

// Middlewares
import * as middlewares from './middlewares';


// Create a new express application instance
const app = express();

// ===========
// Middlewares
// ===========

app.use(
    morgan('dev'),
    helmet(),
    cors(),
)

// ======
// Static
// ======

/** Name of the static folder */
app.use(express.static('public'));

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
