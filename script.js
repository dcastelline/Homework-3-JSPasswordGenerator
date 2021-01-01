// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variable arrays
var lowercase = ["abcdefghijklmnopqrstuvwxyz"];
var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numbers = [0123456789];
var symbols = ["~!@#$%^&*()_+"];
var passLength = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// generatePassword function
function generatePassword() {
  userPassword = "";
  characters = "";

  // Check that user selected a valid length
  pLength = prompt("Choose the desired length of your password, select a number from 8-128 characters.");
    if (pLength >= 8 && pLength <= 128) {
      passLength.length = pLength;
  
      // If length is valid, allow user to select included characters
      var wantLowercase = confirm("Would you like to include lowercase letters?");
      var wantUppercase = confirm("Would you like to include uppercase letters?");
      var wantNumbers = confirm("Would you like to include numbers?");
      var wantSymbols = confirm("Would you like to include symbols?");
    } else {
      // User selected invalid length or no options
      alert('Oops!  You must select a number from 8-128.  Click the "Generate Password" button to start again.');
      return ('Error!  Click "Generate Password" to start again.');
    }
    // If selected length is valid, confirm characters to include
    if (wantLowercase === true) {
      characters += lowercase;
    }
    if (wantUppercase === true) {
      characters += uppercase;
    }
    if (wantNumbers === true) {
      characters += numbers;
    }
    if (wantSymbols === true) {
      characters += symbols;
    }
    for (var i = 0; i < pLength; i++) {
      userPassword += characters[Math.floor(Math.random() * characters.length)];
    }
    // If not characters were selected, error message
    if (wantLowercase === false && wantUppercase === false && wantNumbers ===false && wantSymbols === false) {
      alert('Oops!  You must select to include at least one type of character.  Click the "Generate Password" button to start again.');
      return ('Error!  Click "Generate Password" to start again.');
    } else {
    console.log(userPassword);
    return userPassword;
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// I removed the alert as it displayed on loading the page and was not needed
