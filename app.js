//Taking voice speech
const recognition = new SpeechRecognition();

recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const diagnostic = document.querySelector("#command");
const result = document.querySelector("#output");
const bg = document.querySelector("html");
let btn = document.querySelector("#btn");

const date = new Date();
const year = date.getFullYear();
const month = (date.getMonth() + 1).toString().padStart(2, "0"); //months are indexed from 0
const day = date.getDay().toString().padStart(2, "0");
const formattedDate = `${year}-${month}-${day}`;
console.log(formattedDate);

// API for dog fact 
const URL = "https://dogapi.dog/api/v1/facts"

const getDogFact = async () =>{
  let response = await fetch(URL)
  console.log(response)
  let data = await response.json()
  console.log(data.facts[0])
  result.textContent = data.facts[0]
}

//After clicking on Start listening this code run
btn.onclick = () => {
  btn.innerHTML = "👂🏽Listening...";
  recognition.start();
  console.log("Ready to receive command");
};

//And the result after recognizing the speec or voice command
recognition.onresult = (event) => {
  console.log("Listening command....");

  const transcript = event.results[0][0].transcript.toLowerCase();
  diagnostic.textContent = "User: " + transcript;

  switch (transcript) {
    case "open youtube":
      console.log("Command Recognized, Opening Youtube....!");

      //Open Youtube in new window
      window.open("https://www.youtube.com", "_blank");
      break;

    case "open google":
      console.log("Command Recognized, Opening Google....!");

      //Open Youtube in new window
      window.open("https://www.google.com", "_blank");
      break;

    case "today date":
      console.log("Command Recognized, Today date");
      result.textContent = formattedDate;
      break;

    case "about pankaj":
      result.textContent =
        "Pankaj's full name is Pankaj Hamal. He is 22 years old";
        break;
    case "dog fact":
      getDogFact();
      break;
    
    default:
      result.textContent = "Invalid Command!";
  }

  btn.innerHTML = "Start Listening";
};

recognition.onerror = (event) => {
  console.log(`Error occured in recognization, ${event.error}`);
};
