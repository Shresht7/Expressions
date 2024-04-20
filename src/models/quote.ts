// Database
import { db } from "../database";

// -----------
// QUOTE MODEL
// -----------

/** Model representing a quote */
export interface QuoteModel {
    id: number;
    text: string;
    author: string;
}

db.run(`
    CREATE TABLE IF NOT EXISTS quotes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        text TEXT NOT NULL,
        author TEXT NOT NULL
    )`
);

export async function all(): Promise<QuoteModel[]> {
    return db.all<QuoteModel>('SELECT * FROM quotes');
}

export async function find(id: number): Promise<QuoteModel | undefined> {
    return db.get<QuoteModel>('SELECT * FROM quotes WHERE id = ?', [id]);
}

export async function create(quote: QuoteModel): Promise<number> {
    return db.run('INSERT INTO quotes (text, author) VALUES (?, ?)', [quote.text, quote.author]);
}

export async function update(quote: QuoteModel): Promise<number> {
    return db.run('UPDATE quotes SET text = ?, author = ? WHERE id = ?', [quote.text, quote.author, quote.id]);
}

export async function del(id: number): Promise<number> {
    return db.run('DELETE FROM quotes WHERE id = ?', [id]);
}

export async function count(): Promise<number> {
    return db.get<number>('SELECT COUNT(*) AS count FROM quotes').then(count => count ?? 0);
}

export async function clear() {
    return db.run('DELETE FROM quotes');
}

export async function drop() {
    return db.run('DROP TABLE IF EXISTS quotes');
}

