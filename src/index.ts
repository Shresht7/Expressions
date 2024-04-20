// Library
import app from "./app";
import { PORT } from "./constants";

import { seedDatabase } from "./database/quotes";

seedDatabase()

// Start the server on the specified port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
