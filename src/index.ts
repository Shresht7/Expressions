// Library
import app from "./app";
import { PORT } from "./constants";

// Start the server on the specified port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
