console.log("hello");

const baseURL = "https://api.chucknorris.io/jokes/random";

let jokeButton = document.getElementById("jokeButton");
let jokeText = document.getElementById("joke");

jokeButton.addEventListener("click", fetchJokes);

function fetchJokes(){
    // alert("it worked"); just to check it works
    fetch(baseURL)
        .then((res) => res.json())
        .then((json) => {
            console.log(json.value);
            displayJoke(json.value);
        });
}

function displayJoke(joke){
    jokeText.innerText = joke;
}