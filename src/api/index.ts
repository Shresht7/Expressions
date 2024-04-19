// ----------
// API ROUTES
// ----------

// Library
import express, { Request, Response } from 'express';

// Type Definitions
import { MessageResponse } from '../types';

// Create a router for the API
const router = express.Router();

// Routes
// ------

router.get('/greet/:id', (req, res: Response<MessageResponse>) => {
    const { id } = req.params;
    res.json({
        message: `Hello, ${id}!`
    })
});

// ------------------
export default router
// ------------------
