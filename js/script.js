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
    Year: "July 20, 1969",
    Citation: "Moon Landing"
  },
  {
    quote: "I find your lack of faith disturbing!",
    Author: "Darth Vader",
    Year: "May 25, 1977",
    Citation: "Star Wars: A New Hope"
  },
  {
    quote: "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering",
    Author: "Master Yoda",
    Year: "May 19, 2005",
    Citation: "Star Wars: Revenge of the Sith"
  },
  {
    quote: "Adventure. Excitement. A Jedi craves not these things.",
    Author: "Master Yoda",
    Year: "May 21, 1980",
    Citation: "Star Wars: Empire Strikes Back"
  }
]


/***
 * `getRandomQuote` function
***/
  var previousQuote=0


function getRandomQuote(){
  var randomNumber = (Math.floor(Math.random()*quotes.length));
  // console.log(quotes[randomNumber].quote)
  // console.log(quotes[randomNumber].Author)
  // console.log(quotes[randomNumber].Year)
  // console.log(quotes[randomNumber].Citation)
  document.getElementById("quote-box").innerHTML=quotes[randomNumber].quote;
  // console.log(document.getElementsByClassName("source"))=quotes[randomNumber].Author;


}

/***
 * `printQuote` function
***/
function printQuote(){
  getRandomQuote()
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
