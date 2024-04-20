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

    // SQL statement to create the table
    const sqlStatement = `
    CREATE TABLE quotes (
        id INTEGER PRIMARY KEY,
        text TEXT,
        author TEXT
    )
    `;

    // Return a promise that resolves when the table is created
    return new Promise<void>((resolve, reject) => {
        db.run(sqlStatement, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });

}

// Insert the quotes into the table
async function insertQuotes() {

    // SQL statement to insert a quote
    const sqlStatement = `INSERT INTO quotes (text, author) VALUES (?, ?)`;

    // Return a promise that resolves when all quotes are inserted
    return new Promise<void>((resolve, reject) => {

        // Prepare the statement for execution with parameters
        const stmt = db.prepare(sqlStatement);

        // Insert each quote into the table
        quotes.forEach(quote => {
            stmt.run(quote.text, quote.author);
        });

        // Finalize the statement to release resources
        stmt.finalize((err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });

    });
}

/** Create the table and insert the quotes */
export async function seedDatabase() {
    await createTable();
    await insertQuotes();
}
