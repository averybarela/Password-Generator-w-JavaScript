// Assignment code here
 //these are the values that are going to be used to create a password
const upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
const lowerCase ="abcdefghijklmnopqrstuvwxyz".split("")
const specialCharacters= "!@#$%^&*()_+<>?".split("")
const numeric="0123456789".split("")




// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); 


// Write password to the #password input
// function writePassword() {
//  var password = generatePassword();
//   var passwordText = document.querySelector("#password");

// passwordText.value = password;
 
// }

function generatePassword(){
  var charSelection = " " // string methods or += operators
  var choices = prompt("How Many Password Characters?(min 8, max 128)");
    while (choices < 8 || choices > 128) {
      choices = prompt("How Many Password Characters?(min 8, max 128)");
    }
  var upperCase =confirm('Would you like to include UpperCase Letters?')
    if (uppercase) {

    }
  var lowerCase =confirm('Would you like to include LowerCase Letters?')
    if (lowerCase) {
      
  }
  var specialCharacters =confirm('Would you like to include Special Characters?')
    if (specialCharacters) {
      
  }
  var numeric =confirm('Would you like to include numbers?')
    if (numeric) {
      
  }
  console.log (upperCase, lowerCase, specialCharacters, numeric)
  // var randomIndex= Math.floor(Math.random()*choices.length);
}
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

