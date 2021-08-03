// Assignment Code
let generateBtn = document.querySelector("#generate");
let ques = document.querySelector("#question");
let uI = document.querySelector("#userInput");
let vE = document.querySelector("#validationError");
let enter = document.querySelector("#enter");
let yesBtn = document.querySelector("#yesBtn");
let noBtn = document.querySelector("#noBtn");
let sP = document.querySelector("#settingsPrompt");
let passLength = 0;

// Write password to the #password input
function writePassword() {
  sP.style.visibility = "visible";
  yesBtn.style.visibility = "hidden";
  noBtn.style.visibility = "hidden";
   enter.addEventListener ("click" , changeLength);
  
  for (let i = 0; i < passLength; i++) {
    const element = array[i];
    
  }

  // let password = generatePassword();
  // let passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

function changeLength(){
  
  passLength = uI.value;
  console.log(passLength);
  // if () 
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
