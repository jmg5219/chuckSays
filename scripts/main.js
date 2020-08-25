"use strict";
const chuckSays = document.getElementById
    ('chuckSays');
const Button = document.getElementById('refreshQuote');
const submitFormButton = document.getElementById("submitForm")
const modalOverlay = document.querySelector('.modal-overlay')
const modalClose = document.getElementById('closeModal')

let category = "dev";

// function getQuote(category) {}
const getQuote = () => {
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
    get(url).then(function (response) {
        chuckSays.innerHTML = response.value;
        modalOverlay.classList.toggle('open');
    })
}


//appending categories to a dropdown menu
const getCategories = () => {
    const url = `https://api.chucknorris.io/jokes/categories`;
    const dropdownMenu = document.getElementById('categoryInput')
    get(url).then(function (response) {
        console.log("response is", response, "response length", response.length)
        response.map(function (category) {
            if (category != "explicit") {
                const categoryOption = document.createElement('option')
                categoryOption.value = category;
                categoryOption.text = category.charAt(0).toUpperCase() + category.slice(1);
                dropdownMenu.appendChild(categoryOption);
            }
        })
    })
}


//This will refresh a dev (default) quote
Button.addEventListener('click', function (event) {
    event.preventDefault();
    getQuote()
});

//PLacing event listner on the form
const getChuckQuotes = document.getElementById('getChuckQuotes');
getChuckQuotes.addEventListener('submit', e => {
    e.preventDefault();
    console.log("form submitted");
    const userInput = document.getElementById("categoryInput");
    category = userInput.value;
    getQuote();

});

modalClose.addEventListener('click', function(e){
    modalOverlay.classList.toggle('open');
});





/// This is getting API data on page load
(function () {
    getCategories();
    getQuote()
})();