// Library
import * as Quotes from "../models/quote";
import { APIError } from "../types";

// Type Definitions
import type { Request, Response, NextFunction } from "express";

// ===========
// CONTROLLERS
// ===========

// GET ALL QUOTES
// --------------

/** Retrieves all quotes and sends them as a JSON response */
export async function getAllQuotes(req: Request, res: Response<Quotes.Quote[]>, next: NextFunction) {
    const quotes = Quotes.all();     // Get all quotes
    res.json(quotes);                // Send the quotes
}

// GET RANDOM QUOTE
// ----------------

/** Retrieves a random quote and sends it as a JSON response */
export async function getRandomQuote(req: Request, res: Response<Quotes.Quote>, next: NextFunction) {
    const quote = Quotes.random();  // Get a random quote
    res.json(quote);                // Send the quote
}

// GET QUOTE BY ID
// ---------------

/** Retrieves a quote by its ID and sends it as a JSON response */
export async function getQuoteById(req: Request, res: Response<Quotes.Quote>, next: NextFunction) {

    // Get the ID from the request parameters
    const id = parseInt(req.params.id);

    // If the ID is not a number, send an error
    if (isNaN(id)) {
        return next(new APIError(400, 'Invalid ID'));
    }

    // Get the quote by ID
    const quote = Quotes.find(id);

    // If the quote does not exist, send an error
    if (!quote) {
        return next(new APIError(404, 'Quote not found'));
    }

    // Send the quote
    res.json(quote);
}
