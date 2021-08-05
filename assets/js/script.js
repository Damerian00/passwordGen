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
let entry = document.querySelector("#showResults");
let flag= 0;
let showRequests;
let charRequest;
let uArray = 0;
let lArray= 0;
let sArray = 0;
let upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R","S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerArray = upperArray.join("").toLowerCase().split("");
let specArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "_", "=", "[", "]", "{", "]", "|", ":", ":"];
let parm;
let passwordText = document.querySelector("#password");
let password = [];
let random;


// Write password to the #password input
function writePassword() {
  quest.innerHTML = "Please indicate how many characters between 8 - 128 for the password."
  sP.style.visibility = "visible";
  enter.style.visibility = "visible";
  uI.style.visibility = "visible";
  yesBtn.style.visibility = "hidden";
  noBtn.style.visibility = "hidden";
  enter.addEventListener("click" , changeLength);
  
}

function changeLength(){
  passLength = uI.value;
  if (passLength >= 8 && passLength <= 128){
    entry.innerHTML = "Length: " + passLength;
    uI.value= "";
    uI.style.width = "20px";
    flag = 1;
    enter.removeEventListener("click" , changeLength);
    chooseOptions();
  }else {
    vE.innerHTML = "Please enter in a number between 8 - 128 to proceed."
    vE.style.visibility = "visible";
    enter.addEventListener("click" , changeLength); 
    passLength = uI.value;
  }
}
function chooseOptions(){
  generateBtn.removeEventListener("click", writePassword); 
  noBtn.innerHTML= "No";
  vE.style.visibility = "hidden";
  vE = "";
  uI.style.visibility="hidden";
  yesBtn.style.visibility ="visible";
  noBtn.style.visibility ="visible";
  enter.style.visibility = "hidden";
  noBtn.removeEventListener("click" , chooseOptions);
  quest.innerHTML = "Would you like to include Uppercase Letters?";
  yesBtn.addEventListener ("click", addtoArrayU);
  noBtn.addEventListener ("click",  addtoArrayU);
}
function addtoArrayU (event){
  yesBtn.removeEventListener ("click", addtoArrayU);
  noBtn.removeEventListener ("click",  addtoArrayU);
  parm = event.target.innerHTML;
  if (parm === "Yes"){
    uArray = 1;
  } else {
    
  } 
  quest.innerHTML = "Would you like to include Lowercase Letters?";
  yesBtn.addEventListener ("click", addtoArrayL);
  noBtn.addEventListener ("click",  addtoArrayL);
  
}
 
function addtoArrayL (event){
  yesBtn.removeEventListener ("click", addtoArrayL);
  noBtn.removeEventListener ("click",  addtoArrayL);
  parm = event.target.innerHTML;
  
  if (parm === "Yes"){
    lArray = 1;
  } else {
    
  } 
  quest.innerHTML = "Would you like to include Special Characters?";
  yesBtn.addEventListener ("click", addtoArrayS);
  noBtn.addEventListener ("click",  addtoArrayS);
  
}
function addtoArrayS (event){
  yesBtn.removeEventListener ("click", addtoArrayS);
  noBtn.removeEventListener ("click",  addtoArrayS);
  parm = event.target.innerHTML;
  if (parm === "Yes"){
    sArray = 1;
  } else {
    
  } 
  
  genArray();
}


function genArray (){
 
  sP.style.visibility = "hidden";
  noBtn.style.visibility = "hidden";
  yesBtn.style.visibility = "hidden";
  entry.innerHTML = "";
  uI.style.width = "50px";

  if (uArray === 1 && lArray === 1 && sArray === 1){
    charRequest = [...upperArray, ...lowerArray, ...specArray];
    }else if (uArray === 1 && lArray === 0 && sArray === 0){
    charRequest = upperArray.join("");
    }else if (uArray === 1 && lArray === 0 && sArray === 1){
    charRequest = [...upperArray, ...specArray];
   }else if (uArray === 0 && lArray === 1 && sArray === 1){
    charRequest = [...lowerArray, ...specArray];
  }else if (uArray === 0 && lArray === 1 && sArray === 1){
    charRequest = [...upperArray, ...lowerArray];
    }else if (uArray === 0 && lArray === 1 && sArray === 0){
    charRequest = lowerArray.join("");
    }else if (uArray === 0 && lArray === 0 && sArray === 1){
     charRequest = specArray.join("");
    }else {
      passwordText.innerHTML = "Can't Generate Password since you selected none"
  }
  for (let i = 0; i < passLength; i++){

    random = Math.floor(Math.random()*charRequest.length);
    password.push(charRequest[random]);
  } 
  passwordText.value = password.join("");
  generateBtn.addEventListener("click", function(){location.reload()});
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
