// Library
import * as fs from 'node:fs';
import { DATABASE_PATH } from '../constants';

// Type Definitions
import type { Quote } from '../models/quote';

// Check if the database file exists
if (!fs.existsSync(DATABASE_PATH)) {
    throw new Error(`Database file not found: ${DATABASE_PATH}`);
}

// Read the contents of the database file
const contents = fs.readFileSync(DATABASE_PATH, 'utf-8');

let quotes: Quote[];
try {
    // Try to parse the contents as JSON
    quotes = JSON.parse(contents);
} catch (err) {
    throw new Error(`Failed to parse database file as JSON: ${DATABASE_PATH}`);
}

// Check if the parsed data is an array
if (!Array.isArray(quotes)) {
    throw new Error(`Database file does not contain an array: ${DATABASE_PATH}`);
}

// Export the data
export { quotes };
