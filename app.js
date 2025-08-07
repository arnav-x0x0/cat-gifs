const URL = "https://catfact.ninja/fact";
const GIF_URL = "https://api.thecatapi.com/v1/images/search?mime_types=gif";

let facts = document.getElementById("Facts");
let catImage = document.getElementById("catImage");


const getFacts = async () => {
  try {
    let response = await fetch(URL);
    let data = await response.json();
    facts.innerText = data.fact;
  } catch (err) {
    facts.innerText = "Could not load cat fact 🐾";
    console.log(err);
  }
};

const getNewGif = async () => {
  try {
    let response = await fetch(GIF_URL);
    let data = await response.json();
    catImage.src = data[0].url;
  } catch (err) {
    catImage.alt = "Failed to load cat GIF 😿";
  }
};
