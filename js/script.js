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
    quote: "one small step for man, one giant leap for mankind!",
    Author: "Neal Armstrong",
    Year: "July 20, 1969"
  },
  {
    quote: "I find your lack of faith disturbing!",
    Author: "Darth Vader",
    Year: "July 20, 1969",
    Citation: "Movie"
  },
  {
    quote: "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering",
    Author: "Master Yoda",
    Year: "July 20, 1969",
    Citation: "Movie"
  },
  {
    quote: "Adventure. Excitement. A Jedi craves not these things.",
    Author: "Master Yoda",
    Year: "July 20, 1969",
    Citation: "Movie"
  }
]


/***
 * `getRandomQuote` function
***/
  var previousQuote=0


function getRandomQuote(){
  var randomNumber = (Math.floor(Math.random()*quotes.length));
  console.log(quotes[randomNumber]);

  // console.log((Math.floor(Math.random()*quotes.length)));
  // if (previousQuote = randomNumber){
  //   var randomNumber = (Math.floor(Math.random()*quotes.length)
  //   console.log(quotes[randomNumber])
  // } else {
  //   console.log(quotes[randomNumber]);
  // }
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
