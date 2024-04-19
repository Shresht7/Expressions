// Library
import express, { Request, Response } from 'express';

// Routers
import api from './api';

// Middlewares
import * as middlewares from './middlewares';

// Type Definitions
import { MessageResponse } from './types';

// Create a new express application instance
const app = express();

// ======
// Static
// ======

/** Name of the static folder */
app.use(express.static('public'));

// ======
// Routes
// ======

// Root
app.get('/', (req, res: Response<MessageResponse>) => {
    res.json({
        message: "Hello, World!"
    })
});

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
