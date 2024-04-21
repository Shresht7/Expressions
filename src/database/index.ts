// Library
import * as fs from 'node:fs';
import { DATABASE_PATH } from '../constants';

// Read the contents of the database file and parse it as JSON
const contents = fs.readFileSync(DATABASE_PATH, 'utf-8');

// --------------------------------------
export const data = JSON.parse(contents);
// --------------------------------------
