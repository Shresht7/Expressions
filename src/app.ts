// Library
import express, { Request, Response } from 'express';

// Type Definitions
import { MessageResponse } from './types';

// Create a new express application instance
const app = express();

// Routes
// ------

app.get('/', (req, res: Response<MessageResponse>) => {
    res.json({
        message: "Hello, World!"
    })
});

// ----------------
export default app;
// ----------------
