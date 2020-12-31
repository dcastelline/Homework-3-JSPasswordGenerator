
// Click button to generate button
// Prompts for password criteria
// Prompt for length between 8 and 128 characters
// Choices for lowercase, uppercase, numbers, and/or special characters
// Input validated for each selection
// After prompts, password generated and displayed in alert or written to page

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variable arrays
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var symbols = ["!","@","#","$","%","^","&","*","(",")"];

// Variables for characters included in password


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Password generated alert
alert("Your password is: " + password);
