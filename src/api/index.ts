// ----------
// API ROUTES
// ----------

// Library
import express from 'express';

// Controllers
import { getQuote, getRandomQuote } from '../controllers';

// Create a router for the API
const router = express.Router();

// Routes
// ------

router.get('/quote/random', getRandomQuote);

router.get('/quote/:id', getQuote);

// ------------------
export default router
// ------------------
