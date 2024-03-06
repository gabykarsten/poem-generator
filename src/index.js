function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "07944d6694a03tbbadbf6e7o423a9f8f";
  let prompt = `Generate a poem about ${instructionsInput.value}`;
  let context =
    "You are a funny funny comedian and love to write short poems. Your mission is to generate a 4 line poem and seperate each sentence with a <br><br>. Do not include the title. Sign the poem with SheCodes AI at the bottom, underneath the poem inside a <strong> element and not at the beginning. Make sure to follow the user instructions below";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `Generating poem about ${instructionsInput.value}...`;

  console.log("generating poem");

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
