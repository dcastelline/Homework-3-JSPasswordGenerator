
// Click button to generate button
// Prompts for password criteria
// Prompt for length between 8 and 128 characters
// Choices for lowercase, uppercase, numbers, and/or special characters
// Input validated for each selection
// After prompts, password generated and displayed in alert or written to page

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variable arrays
lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
numbers = [0,1,2,3,4,5,6,7,8,9];
symbols = ["!","@","#","$","%","^","&","*","(",")"];

// Variables for characters included in password
var characterAmount = characterAmountNumber.value
var includeLowercase = includeLowercase.value
var includeUppercase = includeUppercase.value
var includeNumbers = includeNumbers.value
var includeSymbols = includeSymbols.value


// Write password to the #password input
function writePassword() {
  var password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols, includeLowercase);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Password generated alert
alert("Your password is: " + password);
