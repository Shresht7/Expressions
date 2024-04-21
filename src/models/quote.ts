// Library
import { quotes } from "../database";

// Models
export interface Quote {
    quote: string;
    author: string;
}

/**
 * Gets all quotes.
 * @returns All quotes.
 */
export function all(): Quote[] {
    return quotes;
}

/**
 * Finds a quote by its ID.
 * @param id - The ID of the quote to find.
 * @returns The quote with the specified ID, or undefined if not found.
 */
export function find(id: number): Quote | undefined {
    return quotes.at(id);
};

/**
 * Gets a random quote.
 * @returns A random quote.
 */
export function random(): Quote {
    return quotes[Math.floor(Math.random() * quotes.length)];
}
