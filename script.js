function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: ["You put the red back in the rose"],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = "You put the red back in the rose";
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
