function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#poem-topic");
  let apiKey = "2b73f4b12btfbe34cedefo9a6e8a2fb0";
  let context =
    "You are an African poet who writes short poems inspired by any topic.All your short poems have an essence of Africa.Your task is to write a 5 line poem in basic HTML and sign Ntaoleng`s AI project inside a <strong> element.Do  not disolay html on the poem.Please follow all the user instructions.";
  let prompt = `User instructions:Generate a short African poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");

  poemElement.innerHTML = `<div class="hourglass"></div>`;

  poemElement.classList.remove("hidden");
  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
