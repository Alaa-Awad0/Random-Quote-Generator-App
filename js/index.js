var quoteText = document.getElementById("quote-text");
var authorText = document.getElementById("author-text");

var arrayOfQuotes = [
    { author: 'Jim Rohn', quote: 'Beware of what you become in pursuit of what you want.' },
    { author: 'Epictetus', quote: 'It\'s not what happens to you, but how you react to it that matters.' },
    { author: 'Frank Sinatra', quote: 'The best revenge is massive success.' },
    { author: 'Wayne Gretzy', quote: 'You miss 100% of the shots you don\'t take.' },
    { author: 'Nelson Mandela', quote: 'Resentment is like drinking poison and waiting for your enemies to die.' },
    { author: 'Elbert Hubbard', quote: 'Do not take life too seriously. You will not get out alive.' },
];

var lastQuoteIndex;

function getQuote() {
    var randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * arrayOfQuotes.length);
    } while (randomIndex === lastQuoteIndex);

    lastQuoteIndex = randomIndex;

    quoteText.textContent = `"${arrayOfQuotes[randomIndex].quote}"`;
    authorText.textContent = `--${arrayOfQuotes[randomIndex].author}`;
}

document.addEventListener('DOMContentLoaded', getQuote);

