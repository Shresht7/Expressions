// Library
import { Quote, getQuoteById } from "../models/quote";
import { APIError } from "../types";

// Type Definitions
import type { Request, Response, NextFunction } from "express";

// ===========
// CONTROLLERS
// ===========

export function getQuote(req: Request, res: Response<Quote>, next: NextFunction) {

    // Get the ID from the request parameters
    const id = parseInt(req.params.id);

    // If the ID is not a number, send an error
    if (isNaN(id)) {
        return next(new APIError('Invalid ID', 400));
    }

    // Get the quote by ID
    const quote = getQuoteById(id);

    // If the quote does not exist, send an error
    if (!quote) {
        return next(new APIError('Quote not found', 404));
    }

    // Send the quote
    res.json(quote);
}
