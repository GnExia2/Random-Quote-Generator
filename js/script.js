/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/
var quotes = [
  {
    quote: "One small step for man, one giant leap for mankind!",
    Author: "Neal Armstrong",
    year: "July 20, 1969",
    category: "Moon Landing"
  },
  {
    quote: "I find your lack of faith disturbing!",
    Author: "Darth Vader",
    year: "May 25, 1977",
    category: "Star Wars: A New Hope"
  },
  {
    quote: "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering",
    Author: "Master Yoda",
    year: "May 19, 2005",
    category: "Star Wars: Revenge of the Sith"
  },
  {
    quote: "Adventure. Excitement. A Jedi craves not these things.",
    Author: "Master Yoda",
    year: "May 21, 1980",
    category: "Star Wars: Empire Strikes Back"
  },
  {
    quote: "Get busy living or get busy dying.",
    Author: "Stephen King",
    year: "September 22, 1994",
    category: "The Shawshank Redemption"
  }
]



//This function grabs a random quote from the Quotes array.

  function getRandomQuote(){
    var randomNumber = Math.floor(Math.random()* quotes.length);
     return quotes[randomNumber];
    }


//This function grabs a random color.

  function randomColor() {
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor);
    return randomColor
  }

const body = document.getElementById('body')

/***
 * `printQuote` function
***/
function printQuote(){
  randomQuote = getRandomQuote(quotes);
  htmlToPage = '<p class="quote">' + randomQuote.quote +'</p>';
  htmlToPage +='<p class="Author">' + randomQuote.Author;
  if(randomQuote.year){
    htmlToPage += '<span class="year">' + randomQuote.year + '</span>';
  }
  if(randomQuote.category){
    htmlToPage += '<span class="category">' +  " " + randomQuote.category + '</p>';
  }
  htmlToPage += '</p>';
  document.getElementById('quote-box').innerHTML = htmlToPage;
  body.style.background=randomColor()
};
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
