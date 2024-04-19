// Library
import express, { Request, Response } from 'express';

// Routers
import api from './api';

// Type Definitions
import { MessageResponse } from './types';

// Create a new express application instance
const app = express();

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

// ----------------
export default app;
// ----------------
