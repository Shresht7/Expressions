// ----------
// API ROUTES
// ----------

// Library
import express from 'express';

// Controllers
import * as controllers from '../controllers';

// Create a router for the API
const router = express.Router();

// Routes
// ------

// GET RANDOM QUOTE
router.get('/quote/random', controllers.getRandomQuote);

// GET QUOTE BY ID
router.get('/quote/:id', controllers.getQuoteById);

// ------------------
export default router
// ------------------
