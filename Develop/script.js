// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); 

var upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
console.log (upperCase)
var lowerCase ="abcdefghijklmnopqrstuvwxyz".split("") 
console.log(lowerCase)
var specialCharacters="!@#$%^&*()_+<>{}[]".split("")
console.log(specialCharacters) 
var numeric ="0123456789".split("")
console.log(numeric)
var choices ="128" 

// Write password to the #password input
function writePassword() {
  var choices = prompt("How Many Password Characters?(min 8, max 128)");
  var upperCase =confirm('Would you like to include UpperCase Letters?')
  var lowerCase =confirm('Would you like to include LowerCase Letters?')
  var specialCharacters =confirm('Would you like to include Special Characters?')
  var numeric =confirm('Would you like to include numbers?')
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  var randomIndex= Math.floor(Math.random()*choices.length);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

