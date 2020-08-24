"use strict";
const chuckSays = document.getElementById
('chuckSays');
const Button = document.getElementById('refreshQuote');
const submitFormButton = document.getElementById("submitForm")
const defaultCategory = "dev";

// function getQuote(category) {}
const getQuote = (category)=>{
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
    get(url).then(function(response){
        chuckSays.innerHTML= response.value
    })
}


// (function (){
//     const url = 'https://api.chucknorris.io/jokes/random?category=dev';
//     get(url).then(function(response){
//         chuckSays.innerHTML= response.value
//     })
  

// })();

//This will refresh a dev (default) quote
Button.addEventListener('click', function (event) {
    event.preventDefault();
    getQuote(defaultCategory)
});

//This will obtain a category quote
submitFormButton.addEventListener('click', function (event) {
    event.preventDefault();
    const userInput = document.getElementById("categoryInput");
    const category = userInput.value;
    getQuote(category);
});

/// This is getting API data on page load
(function (){
   getQuote(defaultCategory)
})();