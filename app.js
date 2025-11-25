const recognition = new SpeechRecognition();

recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const diagnostic = document.querySelector("#output");
const bg = document.querySelector("html");
let btn = document.querySelector("#btn");

btn.onclick = () => {
  btn.innerHTML = "👂🏽Listening...";
  recognition.start();
  console.log("Ready to receive command");
};

recognition.onerror = function (event) {
  console.error("Speech recognition error detected: " + event.error);
};

recognition.onresult = (event) => {
  console.log("Working...");
  const color = event.results[0][0].transcript;
  console.log(color);
  diagnostic.textContent = `Result received: ${color}`;
  bg.style.backgroundColor = color;
  btn.innerHTML = "Start Listening";
};
