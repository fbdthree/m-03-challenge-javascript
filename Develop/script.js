// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare variables (strings) for capital letters, lower-case letters, number, and special characters.
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialCharacters = " !#$%&'()*+,-./:;<=>?@[^_`{|}~"

// Split them up into arrays.
var upperArray = upperLetters.split("");
var lowerArray = lowerLetters.split("");
var numbersArray = numbers.split("");
var specialCharArray = specialCharacters.split("");

// Create prompt for length of password.  8 - 128 characters in length.
var passwordLength = window.prompt("How long to you want the password to be?  Choose between 8 and 128 characters.")
// Create prompt for whether or not to include lowercase letters.
var includeLower = window.confirm("Would you like to include lower-case letters?");
console.log(includeLower);
// Create prompt for whether or not to include uppercase letters.
var includeUpper = window.confirm("Would you like to include upper-case letters?");
console.log(includeUpper);
// Create prompt for whether or not to include numbers.
var includeNumbers = window.confirm("Would you like to include numbers?");
console.log(includeNumbers);
// Create prompt for whether or not to include special characters.
var includeSpecial = window.confirm("Would you like to include special characters?");
console.log(includeSpecial)

// Validate input and make sure at least one chracter type was selected.
if((passwordLength >= 8 && passwordLength <= 128) && (includeUpper || includeLower || includeNumbers || includeSpecial)) {
  writePassword(generatePassword());
  
  
} else {
  window.prompt("You have not fulfilled requirements to generate a password.  Please restart program and try again.")
}
// When all prompts are answered, generate password.
function generatePassword() {
  // Create empty string for password.
  var password = "";
  // Create array for characters to be randomly chosen from  after the requirements for the first 1-4 characters of the password have been satisfied.
  var passwordCharactersArray = [];
  // Go through each flag and include the character if true.  That way at least one requested character is included.  Up to the first four characers
  //  of the password will satify the requiremnts.
  if(includeLower) {
    password += getRandomCharacter(lowerArray);
    passwordCharactersArray = passwordCharactersArray.concat(lowerArray);
  }
  if(includeUpper) {
    password += getRandomCharacter(upperArray);
    passwordCharactersArray = passwordCharactersArray.concat(upperArray);
  }
  if(includeNumbers) {
    password += getRandomCharacter(numbersArray);
    passwordCharactersArray = passwordCharactersArray.concat(numbersArray);
  }
  if(includeSpecial) {
    password += getRandomCharacter(specialCharArray);
    passwordCharactersArray = passwordCharactersArray.concat(specialCharArray);
  }
  console.log(password)
  console.log(passwordCharactersArray)

  // Get the remaining length of the password.
  var remainingLength = passwordLength - password.length;
  console.log(remainingLength);

  for(var i = 0; i < remainingLength; i++) {
    password += getRandomCharacter(passwordCharactersArray);
  }
  console.log(password);

  return password;
}


// Create getRandomCharacter function.
function getRandomCharacter(charArray) {
  var randomIndex = Math.floor(Math.random() * charArray.length);
  return charArray[randomIndex];
}

// Display password in either an alert or write it to page.

// Write password to the #password input
function writePassword(password) {
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

