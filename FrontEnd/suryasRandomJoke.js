let jokeTextEl = document.getElementById("jokeText");
let spinnerEl = document.getElementById("spinner");
let jokeBtnEl = document.getElementById("jokeBtn");

let options = {
    method: "GET"
};

function getRandomJoke() {
    spinnerEl.classList.remove("d-none");
    jokeTextEl.classList.add("d-none");

    fetch("https://apis.ccbp.in/jokes/random", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let randomJoke = jsonData.value; //indulu data ani, sentences unnai so it takes those valuess

            spinnerEl.classList.add("d-none");
            jokeTextEl.classList.remove("d-none");

            jokeTextEl.textContent = randomJoke;
        });
}

jokeBtnEl.addEventListener("click", getRandomJoke);