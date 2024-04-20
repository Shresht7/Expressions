// Library
import sqlite from 'sqlite3';
import { DATABASE_PATH } from '../constants';

// Verbose mode for debugging
const sqlite3 = sqlite.verbose();

// Create a new database in memory
/** Database instance for the application */
export const db = new sqlite3.Database(DATABASE_PATH);
