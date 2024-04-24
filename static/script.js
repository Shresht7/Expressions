// ------
// SCRIPT
// ------

// ------------
// DOM ELEMENTS
// ------------

/** The main element */
const main = /** @type HTMLDivElement */ (document.querySelector('main'));

/** The quote template */
const template = /** @type HTMLTemplateElement */ (document.getElementById('quote-template'));

// --------------
// INITIALIZATION
// --------------

/** The collection of quotes */
const quotes = await getQuotes();

// Show a random quote
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
 * @typedef {Object} Quote
 * @property {string} quote - The quote
 * @property {string} author - The author of the quote
 */

/**
 * Retrieves the collection of quotes
 * @returns {Promise<Quote[]>} The collection of quotes
 */
async function getQuotes() {
    const quotes = await fetch(`/quotes.json`)
        .then(response => response.json())
    return quotes;
}

/**
 * Retrieves a random quote
 * and updates the quote and author elements on the page
 */
async function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const { quote, author } = quotes[randomIndex];
    updateQuote(quote, author);
}

/**
 * Updates the quote and author elements on the page
 * @param {string} quote - The quote to display
 * @param {string} author - The author of the quote
 */
function updateQuote(quote, author) {
    // Remove the existing blockquote element
    main.querySelector('#blockquote')?.remove();

    // Create a new blockquote element
    const blockquote = template.content.cloneNode(true);
    blockquote.getElementById('quote').innerText = quote;
    blockquote.getElementById('quote-author').innerText = author ? "— " + author : "";

    // Add the blockquote element to the main element
    main.appendChild(blockquote);
}
