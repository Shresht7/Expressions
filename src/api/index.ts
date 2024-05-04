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

// GET ALL QUOTES
router.get('/quotes', controllers.getAllQuotes);

// GET RANDOM QUOTE
router.get('/quotes/random', controllers.getRandomQuote);

// GET QUOTE BY ID
router.get('/quotes/:id', controllers.getQuoteById);

// ------------------
export default router
// ------------------
