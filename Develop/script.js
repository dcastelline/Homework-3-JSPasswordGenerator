
// Click button to generate button
// Prompts for password criteria
// Prompt for length between 8 and 128 characters
// Choices for lowercase, uppercase, numbers, and/or special characters
// Input validated for each selection
// After prompts, password generated and displayed in alert or written to page

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
