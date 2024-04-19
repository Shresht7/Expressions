// Library
import express from 'express';

// Create a new express application instance
const app = express();

// Routes
// ------

app.get<{}, string>('/', (req, res) => {
    res.send('Hello World!');
});

// ----------------
export default app;
// ----------------
