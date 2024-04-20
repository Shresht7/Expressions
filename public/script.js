/**
 * Generates a random number between the specified range.
 *
 * @param {number} max - The maximum value of the range (inclusive).
 * @param {number} [min=0] - The minimum value of the range (inclusive). Defaults to 0 if not provided.
 * @returns {number} The randomly generated number.
 */
const getRandomNumber = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * Retrieves a random quote from the server and updates the quote and author elements on the page.
 */
function getRandomQuote() {
    const idx = getRandomNumber(3, 1);
    fetch(`/api/v1/quote/${idx}`)
        .then(response => response.json())
        .then((data) => {
            document.getElementById('quote').innerText = data.quote;
            document.getElementById('quote-author').innerText = "— " + data.author;
        });
}

// Get a new quote when the page loads
getRandomQuote();

// Get a new quote when the user presses the "spacebar" key
document.body.addEventListener('keyup', (event) => {
    if (event.code === 'Space') {
        getRandomQuote();
    }
});
