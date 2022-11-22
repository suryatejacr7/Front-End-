let speedTypingTest = document.getElementById("speedTypingTest");
let timer = document.getElementById("timer");
let quoteDisplay = document.getElementById("quoteDisplay");
let result = document.getElementById("result");
let quoteInput = document.getElementById("quoteInput");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");
let spinner = document.getElementById("spinner");


function getQuote() {
    let url = "https://apis.ccbp.in/random-quote";
    let options = {
        method: "GET",
    };
    spinner.classList.remove("d-none");
    quoteDisplay.classList.add("d-none");

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinner.classList.add("d-none");
            quoteDisplay.classList.remove("d-none");

            quoteDisplay.textContent = jsonData.content;
        });
}


if (quoteDisplay !== "") {
    countdown = 0;
    timerStart();
    getQuote();
}


function timerStart() {
    timer.style.fontWeight = 'bold';
    timer.textContent = countdown;
    timerId = setInterval(startTimer, 1000);

}

function startTimer() {
    if (countdown < 1000) {
        countdown = countdown + 1;
        timer.textContent = countdown + " Seconds";
    }
}

function clearPreviousTimers() {
    clearInterval(timerId);

    result.textContent = "";
}

function validateQuote() {
    if (quoteInput.value === quoteDisplay.textContent) {
        clearPreviousTimers();
        quoteInput.textContent = "";
        result.textContent = "You typed in " + countdown + " seconds"
    } else if (quoteInput !== quoteDisplay) {
        result.textContent = "You typed incorrect quote"

    }
}
submitBtn.addEventListener("click", function() {
    validateQuote();

})
resetBtn.addEventListener("click", function() {
    quoteInput.value = "";
    getQuote();
    clearPreviousTimers();
    countdown = 0;
    timerStart();
});