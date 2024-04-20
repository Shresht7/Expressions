// Data
import { db } from "../database";

// -----------
// QUOTE MODEL
// -----------

/** Model representing a quote */
export interface Quote {
    id: number;
    text: string;
    author: string;
}

export async function getQuoteById(id: number): Promise<Quote | undefined> {
    return db.get<Quote>('SELECT * FROM quotes WHERE id = ?', [id]);
}
