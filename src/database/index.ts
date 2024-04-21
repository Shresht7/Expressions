// Library
import * as fs from 'node:fs';
import { DATABASE_PATH } from '../constants';

// Check if the database file exists
if (!fs.existsSync(DATABASE_PATH)) {
    throw new Error(`Database file not found: ${DATABASE_PATH}`);
}

// Read the contents of the database file
const contents = fs.readFileSync(DATABASE_PATH, 'utf-8');

let data;
try {
    // Try to parse the contents as JSON
    data = JSON.parse(contents);
} catch (err) {
    throw new Error(`Failed to parse database file as JSON: ${DATABASE_PATH}`);
}

// Check if the parsed data is an array
if (!Array.isArray(data)) {
    throw new Error(`Database file does not contain an array: ${DATABASE_PATH}`);
}

// Export the data
export { data };
