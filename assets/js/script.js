// Assignment Code
let generateBtn = document.querySelector("#generate");
let quest = document.querySelector("#question");
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
  vE.style.visibility = "hidden";
  enter.addEventListener("click" , changeLength);
  
  for (let i = 0; i < passLength; i++) {
    const element = array[i];
    
  };

  // let password = generatePassword();
  // let passwordText = document.querySelector("#password");

  // passwordText.value = password;

}
function selectCharTypes(){
  quest.innerHTML = "Please indicate a character you will like to have included in the password.";
 
  uI.type = "text";
  uI.setAttribute('maxlength',1);
}
function changeLength(){
  
  passLength = uI.value;
  console.log(passLength);
  var flag = 0;
  

    if (passLength >= 8 && passLength <= 128){
    
    uI.value= " ";
    uI.style.width = "20px";
    flag = 1;
    selectCharTypes();
    }else {
      vE.style.visibility = "visible";
      enter.addEventListener("click" , changeLength); 
    }

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
