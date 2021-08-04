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
let uArray = 0;
let lArray= 0;
let sArray = 0;
let upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "j", "K", "L", "M", "N", "O", "P", "Q", "R","S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerArry = upperArray.join("").toLowerCase().split("");
let specArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "_", "=", "[", "]", "{", "]", "|", ":", ":"]

// Write password to the #password input
function writePassword() {
  sP.style.visibility = "visible";
  yesBtn.style.visibility = "hidden";
  noBtn.style.visibility = "hidden";
  vE.style.visibility = "hidden";
  enter.addEventListener("click" , changeLength);
  
  // for (let i = 0; i < passLength; i++) {
  //   const element = array[i];
    
  // };

  // let password = generatePassword();
  // let passwordText = document.querySelector("#password");

  // passwordText.value = password;
// combining arrays newCArray = [...array1, ...array2, ...array3, etc.];
// random = Math.floor(Math.random()*newCArray.length)
// password.push(neCArray[random])
// password.join("");
/* for (let i = 0; i > passLength; i++){

} */

}

// function selectCharTypes(){
//   vE.style.visibility = "hidden";
//   quest.innerHTML = "Please indicate a character you will like to have included in the password by inputting each character and hitting enter. Select done button when you are finished.";
//   noBtn.innerHTML = "Done";
//   noBtn.style.visibility = "visible";
//   uI.type = "text";
//   uI.setAttribute('maxlength',1);
//  enter.addEventListener("click" , function CharLoop(){
//   let specChar = uI.value;
//   let check = charRequest.indexOf(specChar);
//   console.log(check);
//     if (check === -1){
//       charRequest.push(specChar);
//       entry.innerHTML = "Length: " + passLength + " Characters Selected: " + charRequest;
//       console.log(charRequest);
//       console.log(specChar);
//     } else {
//      vE.style.visibility = "visible"; 
//      vE.innerHTML = "That character has already been selected please make another selection or choose done." 
//     }
    
//  }); 
//  noBtn.addEventListener("click" , chooseOptions);
// }

function chooseOptions(){
  noBtn.innerHTML= "No";
  vE.style.visibility = "hidden";
  vE = "";
  uI.style.visibility="hidden";
  yesBtn.style.visibility ="visible";
  noBtn.style.visibility ="visible";
  enter.style.visibility = "hidden";
  noBtn.removeEventListener("click" , chooseOptions);
  quest.innerHTML = "Would you like to include uppercase Letters?";
  yesBtn.removeEventListener ("click", function yes(){uArray =1;lowerArrayQuest();});
  noBtn.removeEventListener ("click", function no(){lowerArrayQuest();});
}
  

function lowerArrayQuest () {
  yesBtn.removeEventListener ("click", function yes(){lowerArrayQuest();});
  noBtn.removeEventListener ("click", function no(){lowerArrayQuest();});
  quest.innerHTML = "Would you like to include Lowercase Letters?";
  yesBtn.removeEventListener ("click", function yes(){lArray =1;specArrayQuest();});
  noBtn.removeEventListener ("click", function no(){specArrayQuest();});
}

function specArrayQuest () {
  yesBtn.removeEventListener ("click", function yes(){specArrayQuest();});
  noBtn.removeEventListener ("click", function no(){specArrayQuest();});
  quest.innerHTML = "Would you like to include Special Characters?";
  yesBtn.removeEventListener ("click", function yes(){lArray =1;lowerArrayQuest();});
  noBtn.removeEventListener ("click", function no(){lowerArrayQuest();});
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
    chooseOptions();
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
