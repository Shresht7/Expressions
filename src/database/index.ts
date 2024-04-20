// Library
import sqlite from 'sqlite3';
import { quotes } from './quotes';

// Verbose mode for debugging
const sqlite3 = sqlite.verbose();

// Create a new database in memory
/** Database instance for the application */
export const db = new sqlite3.Database(':memory:');

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

// Create the table and insert the quotes
(async () => {
    await createTable();
    await insertQuotes();
})();
