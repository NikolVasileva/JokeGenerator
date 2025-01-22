// script.js
document.getElementById("jokeBtn").addEventListener("click", fetchJoke);

async function fetchJoke() {
    let jokeElement = document.getElementById("joke");
    try {
        let response = await fetch("https://official-joke-api.appspot.com/jokes/random");
        let joke = await response.json();
        jokeElement.textContent = `${joke.setup} - ${joke.punchline}`;
    } catch (error) {
        jokeElement.textContent = "Oops! Could not fetch a joke. Please try again.";
        console.error(error);
    }
    
}
