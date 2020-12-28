
// Click button to generate button
// Prompts for password criteria
// Prompt for length between 8 and 128 characters
// Choices for lowercase, uppercase, numbers, and/or special characters
// Input validated for each selection
// After prompts, password generated and displayed in alert or written to page

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// My attempt

// Prompts to store user input
var passLength = prompt("Password Length: Choose from 8 to 128 characters");
  passLength = passLength[math.floor(math.random() * 128) + 7];

var confirmLCase = confirm("Do you want to include lowercase letters?");

var confirmUCase = confirm("Do you want to include uppercase letters?");

var confirmNum = confirm("Do you want to include numbers?");
 
var confirmSpcl = confirm("Do you want to include special characters?");
 
// Confirm selections
var confChoices = confirm("Are these selections correct?");

// Password generated alert
alert("Your password is: " + password);

// Password generator function attempts
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


  
}