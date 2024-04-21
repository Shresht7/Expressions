// ------
// SCRIPT
// ------

// Get a new quote when the page loads
getRandomQuote();

// Get a new quote when the user presses the "spacebar" key
document.body.addEventListener('keyup', (event) => {
    if (event.code === 'Space') {
        getRandomQuote();
    }
});

// ----------------
// HELPER FUNCTIONS
// ----------------

/**
 * Updates the quote and author elements on the page.
 * @param {string} quote - The quote to display.
 * @param {string} author - The author of the quote.
 */
function updateQuote(quote, author) {
    document.getElementById('quote').innerText = quote;
    document.getElementById('quote-author').innerText = author ? "— " + author : "";
}

/**
 * Retrieves a random quote from the server
 * and updates the quote and author elements on the page.
 */
async function getRandomQuote() {
    const { quote, author } = await fetch(`/api/v1/quote/random`)
        .then(response => response.json())

    updateQuote(quote, author);
}
