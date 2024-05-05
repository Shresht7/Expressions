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
        hideTips();
    }
});

// Get a new quote when the user taps on the screen
document.body.addEventListener('touchend', (event) => {
    getRandomQuote();
    hideTips();
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
    if (author) {
        blockquote.getElementById('quote-author').innerText = author;
        blockquote.getElementById('quote-author').setAttribute('data-prefix', '—');
    }

    // Add the blockquote element to the main element
    main.appendChild(blockquote);
}

// ----
// TIPS
// ----

/** The timeout for showing the tips element (in seconds) */
const TIPS_FIRST_TIMEOUT = 5000;

/** The timeout for hiding the tips element (in seconds) */
const TIPS_SUBSEQUENT_TIMEOUT = 15000;

/** The tips element */
const tips = /** @type HTMLDivElement */ (document.getElementById('tips'));

/** The timeout for hiding the tips element */
let tipsTimeout;

/** Shows the tips element */
function showTips() {
    tips.classList.remove('hidden');
    if ('ontouchend' in document.body) {
        tips.innerText = 'Tap the screen for more';
    }
}

/** Hides the tips element */
function hideTips() {
    tips.classList.add('hidden');
    if (tipsTimeout) {
        clearTimeout(tipsTimeout)
    };
    tipsTimeout = setTimeout(showTips, TIPS_SUBSEQUENT_TIMEOUT); // Show tips again after 15 seconds
}

// Show tips after 5 seconds on page load
tipsTimeout = setTimeout(showTips, TIPS_FIRST_TIMEOUT);
