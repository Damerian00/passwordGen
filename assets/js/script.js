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
let charRequest = [];
let entry = document.querySelector("#showResults");
let flag= 0;
let showRequests;

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
 enter.addEventListener("click" , function CharLoop(){
  
    if (specChar = !null){
     let specChar = uI.value;
      charRequest.push(specChar);
      entry.innerHTML = "Length: " + passLength + " Characters Selected: " + charRequest;
      console.log(charRequest);
      console.log(specChar);
    }

 }); 

 vE.style.visibility = "hidden";
 quest.innerHTML = "Please indicate a character you will like to have included in the password by inputting each character and hitting enter. Select done button when you are finished.";
 noBtn.innerHTML = "Done";
 noBtn.style.visibility = "visible";
 uI.type = "text";
 uI.setAttribute('maxlength',1);
//  let charValue = uI.value;
//  charRequest.push(charValue);
 
}



function changeLength(){
  
  passLength = uI.value;
  console.log(passLength);
    if (passLength >= 8 && passLength <= 128){
    vE.style.visibility = "hidden";  
    entry.innerHTML = "Length: " + passLength;
    uI.value= "";
    uI.style.width = "20px";
    flag = 1;
    console.log("This flag is " + flag);
    enter.removeEventListener("click" , changeLength);
    selectCharTypes();
    }else {
      vE.style.visibility = "visible";
      enter.addEventListener("click" , changeLength); 
      passLength = uI.value;
      console.log("The flag is " + flag);
    }
    console.log(passLength);
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
