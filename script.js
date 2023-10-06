// Assignment code here
// Add all possible characters that we could use for the password
var characterLength = 8;
var choiceArr = [];
//this is where we are going to add all of the characters that we could potentially use in our password.
var numberArr = ['1','2','3','4','5','6','7','8','9','0'];
var specialCharArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '=', '-'];
var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];



var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//when button is clicked, generate series of prompts: length of password least 8 most 128
//ask for character types to be included,
//input should be validated and at least on character type should be selected 
// when all prompts are answered then a password is generated. 

// Write password to the #password input
function writePassword() {
  var correctPrompts =  getPrompts(); 
  var passwordText = document.querySelector("#password");

  if(correctPrompts){
  var newPassword = generatePassword();
  

  passwordText.value = newPassword;

 }  else {
      passwordText.value ="";
 }

}

function generatePassword() {
var password = "";
for(var i = 0; i < characterLength; ++i) {
  var randomIndex = Math.floor(Math.random() * choiceArr.length);
  password = password + choiceArr[randomIndex];
}
  return password;
}

function getPrompts() {
    choiceArr =[];
    characterLength = parseInt(prompt("Between 8-128 characters, how long do you want your password to be?"));
      // just making sure that the user types in a valid number here
    if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
      alert("That is not a valid input, please try again");
      return false; // this is where we get through our prompts 
    }

    if (confirm("Would you like us to put lowercase letters in your password? click *Ok*")) {
      choiceArr = choiceArr.concat(lowerCaseArr);

    }

    if (confirm("Would you like us to put Uppercase letters in your password? click *Ok*")) {
      choiceArr = choiceArr.concat(uppperCaseArr);

    }

    if(confirm("Would you like us to use Special characters in your password? click *Ok*")){
      choiceArr = choiceArr.concat(specialCharArr);
    }

    if (confirm("Would you like us to use numbers in your password? Click *Ok* ")) {
      choiceArr = choiceArr.concat(numberArr);
    }

    return true;
  
}