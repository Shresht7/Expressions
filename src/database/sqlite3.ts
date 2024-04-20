// Library
import sqlite from 'sqlite3';

// Verbose mode for debugging
const sqlite3 = sqlite.verbose();

/**
 * A class for interacting with an SQLite3 database.
 * This class is a wrapper around the sqlite3 library that provides
 * async/await methods for running queries.
 */
export class SQLite3 {

    /** Database instance for the application */
    db: sqlite.Database;

    /**
     * Create a new SQLite3 database instance
     * @param path The path to the database file
     */
    constructor(private readonly path: string = ":memory:") {
        this.db = new sqlite3.Database(this.path);
    }

    /**
     * Open the database
     * @returns A promise that resolves when the database is opened
     */
    async open() {
        return new Promise((resolve, reject) => {
            this.db = new sqlite3.Database(this.path, (err) => {
                if (err) { reject(err) }
                else { resolve(null) }
            })
        })
    }

    /**
     * Close the database
     * @returns A promise that resolves when the database is closed
     */
    async close() {
        return new Promise((resolve, reject) => {
            this.db.close((err) => {
                if (err) { reject(err) }
                else { resolve(null) }
            })
        })
    }

    /**
     * Run an SQL query
     * @param sql The SQL query to run
     * @param params The parameters for the query
     * @returns A promise that resolves when the query is run
     */
    async run(sql: string, params: any[] = []) {
        return new Promise<number>((resolve, reject) => {
            this.db.run(sql, params, function (err) {
                if (err) { reject(err) }
                else { resolve(this.lastID) }
            })
        })
    }

    /**
     * Get the first row that matches the query
     * @param sql The SQL query to run
     * @param params The parameters for the query
     * @returns A promise that resolves with the row
     */
    async get<T>(sql: string, params: any[] = []): Promise<T | undefined> {
        return new Promise((resolve, reject) => {
            this.db.get<T>(sql, params, (err, row) => {
                if (err) { reject(err) }
                else { resolve(row) }
            })
        })
    }

    /**
     * Get all rows that match the query
     * @param sql The SQL query to run
     * @param params The parameters for the query
     * @returns A promise that resolves with the rows
     */
    async all<T>(sql: string, params: any[] = []): Promise<T[]> {
        return new Promise((resolve, reject) => {
            this.db.all<T>(sql, params, (err, rows) => {
                if (err) { reject(err) }
                else { resolve(rows) }
            })
        })
    }

}
