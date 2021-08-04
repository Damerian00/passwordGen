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
let uFlag = 0;
let lArray= 0;
let lFlag = 0;
let sArray = 0;
let sFlag = 0;
let upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "j", "K", "L", "M", "N", "O", "P", "Q", "R","S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerArray = upperArray.join("").toLowerCase().split("");
let specArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "_", "=", "[", "]", "{", "]", "|", ":", ":"]
let password = document.getElementById().innerHTML;

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
  quest.innerHTML = "Would you like to include Uppercase Letters?";
  yesBtn.addEventListener ("click", addtoArray);
  noBtn.addEventListener ("click",  addtoArray);
}
function addtoArray (event){
  let parm = event.innerhtml.toLowerCase;
  if (parm === "yes" && uFlag === 0){
    uArray = 1;
    uFlag = 1;
  }else {}
  quest.innerHTML = "Would you like to include Lowercase Letters?";
  if(parm === "yes" && lFlag === 0){
    lArray = 1;
    lflag = 1;
  }else {}
  if (parm === "yes" && sFlag === 0){
    sArray = 1;
    sFlag = 1;
  } else{}
  if (uFlag === 1 && lFlag === 1 && sFlag === 1){
    genArray();
  }
  
}  

// function lowerArrayQuest () {
//   quest.innerHTML = "Would you like to include Lowercase Letters?";
// }

// function specArrayQuest () {
//   quest.innerHTML = "Would you like to include Special Characters?";
// }

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

function genArray (){
  sP.style.visibility = "hidden";

  if (uArray === 1 && lArray === 1 && sArray === 1){
    charRequest = [...upperArray, ...lowerArray, ...sArray];
    }else if (uArray === 1 && lArray === 0 && sArray === 0){
    charRequest = upperArray.join("");
    }else if (uArray === 1 && lArray === 0 && sArray === 1){
    charRequest = [...upperArray, ...sArray];
   }else if (uArray === 0 && lArray === 1 && sArray === 1){
    charRequest = [...lowerArray, ...sArray];
  }else if (uArray === 0 && lArray === 1 && sArray === 1){
    charRequest = [...upperArray, ...lowerArray];
    }else if (uArray === 0 && lArray === 1 && sArray === 0){
    charRequest = lowerArray.join("");
    }else if (uArray === 0 && lArray === 0 && sArray === 1){
     charRequest = upperArray.join("");
    }else {
      password.innerHTML = "Can't Generate Password since you selected none"
  }
  for (let i = 0; i > passLength; i++){
    random = Math.floor(Math.random()*newCArray.length)
// password.push(neCArray[random])
// password.join("");
    let random = Math.floor(Math.random()*charRequest.length);
    password.push(charRequest[random]);
  } 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
