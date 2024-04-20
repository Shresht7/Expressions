// Library
import { SQLite3 } from './sqlite3';
import { DATABASE_PATH } from '../constants';

// ------------------------------------------
export const db = new SQLite3(DATABASE_PATH);
// ------------------------------------------
