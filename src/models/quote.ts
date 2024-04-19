// Data
import { quotes } from "../data/quotes";

// -----------
// QUOTE MODEL
// -----------

/** Model representing a quote */
export interface Quote {
    id: number;
    text: string;
    author: string;
}

export function getAllQuotes(): Quote[] {
    return quotes;
}

export function getQuoteById(id: number): Quote | undefined {
    return quotes.find(quote => quote.id === id);
}
