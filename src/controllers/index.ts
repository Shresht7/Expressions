// Library
import { Quote, find, random } from "../models/quote";
import { APIError } from "../types";

// Type Definitions
import type { Request, Response, NextFunction } from "express";

// ===========
// CONTROLLERS
// ===========

export async function getQuoteById(req: Request, res: Response<Quote>, next: NextFunction) {

    // Get the ID from the request parameters
    const id = parseInt(req.params.id);

    // If the ID is not a number, send an error
    if (isNaN(id)) {
        return next(new APIError('Invalid ID', 400));
    }

    // Get the quote by ID
    const quote = find(id);

    // If the quote does not exist, send an error
    if (!quote) {
        return next(new APIError('Quote not found', 404));
    }

    // Send the quote
    res.json(quote);
}

export async function getRandomQuote(req: Request, res: Response<Quote>, next: NextFunction) {

    // Get a random quote
    const quote = random();

    // Send the quote
    res.json(quote);

}
