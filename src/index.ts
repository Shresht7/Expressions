// Library
import app from "./app";

// Constants
/** The port number that the server will listen to */
const PORT = process.env.PORT || 3000;

// Start the server on the specified port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
