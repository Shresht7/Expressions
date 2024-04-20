// Database
import { db } from './index';

// Model
import type { Quote } from '../models/quote';

// Data
export const quotes: Quote[] = [
    {
        id: 1,
        text: 'The best way to predict the future is to invent it.',
        author: 'Alan Kay'
    },
    {
        id: 2,
        text: 'The only way to get started is to quit talking and begin doing.',
        author: 'Walt Disney'
    },
    {
        id: 3,
        text: 'Don\'t watch the clock; do what it does. Keep going.',
        author: 'Sam Levenson'
    },
];

// Create the quotes table
async function createTable() {
    return db.run(`
        CREATE TABLE IF NOT EXISTS quotes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            text TEXT NOT NULL,
            author TEXT NOT NULL
        )`
    );
}

// Insert the quotes into the table
async function insertQuotes() {
    for (const quote of quotes) {
        await db.run(
            'INSERT INTO quotes (text, author) VALUES (?, ?)',
            [quote.text, quote.author]
        );
    }
}

/** Create the table and insert the quotes */
export async function seedDatabase() {
    await createTable();
    await insertQuotes();
}
