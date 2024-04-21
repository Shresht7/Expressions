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
 * Retrieves a random quote from the server and updates the quote and author elements on the page.
 */
function getRandomQuote() {
    fetch(`/api/v1/quote/random`)
        .then(response => response.json())
        .then((data) => {
            document.getElementById('quote').innerText = data.quote;
            document.getElementById('quote-author').innerText = "— " + data.author;
        });
}
