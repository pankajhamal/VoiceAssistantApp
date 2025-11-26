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



recognition.onresult = (event) => {
  console.log("Listening command....");
  
  const transcript = event.results[0][0].transcript.toLowerCase();
  diagnostic.textContent = transcript

  if(transcript.includes('open youtube') || transcript.includes('go to youtube')){
    console.log("Command Recognized, Opening Youtube....!")

    //Open Youtube in new window
    window.open('https://www.youtube.com','_blank');
  } else{
    console.log("Command not Recognized!")
  }
  
  btn.innerHTML = "Start Listening";
};

recognition.onerror = (event) =>{
  console.log(`Error occured in recognization, ${event.error}`)
}