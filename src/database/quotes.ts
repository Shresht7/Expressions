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

db.run(`
    CREATE TABLE IF NOT EXISTS quotes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        text TEXT NOT NULL,
        author TEXT NOT NULL
    )`
);

export async function all(): Promise<Quote[]> {
    return db.all<Quote>('SELECT * FROM quotes');
}

export async function find(id: number): Promise<Quote | undefined> {
    return db.get<Quote>('SELECT * FROM quotes WHERE id = ?', [id]);
}

export async function create(quote: Quote): Promise<number> {
    return db.run('INSERT INTO quotes (text, author) VALUES (?, ?)', [quote.text, quote.author]);
}

export async function update(quote: Quote): Promise<number> {
    return db.run('UPDATE quotes SET text = ?, author = ? WHERE id = ?', [quote.text, quote.author, quote.id]);
}

export async function del(id: number): Promise<number> {
    return db.run('DELETE FROM quotes WHERE id = ?', [id]);
}

export async function count(): Promise<number> {
    return db.get<number>('SELECT COUNT(*) AS count FROM quotes').then(count => count ?? 0);
}

export async function seed() {
    return Promise.all(quotes.map(quote => create(quote)));
}

export async function clear() {
    return db.run('DELETE FROM quotes');
}

export async function drop() {
    return db.run('DROP TABLE IF EXISTS quotes');
}
