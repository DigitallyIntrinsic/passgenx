// Assignment Code
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

space = [];

var choices;

var toUpper = function (x) {
  return x.toUpperCase();
};

alpha2 = alpha.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});

function generatePassword() {

  enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  // This code was adapted from chatGPT, and was changed to fit the current project
  if (!enter) {
    alert("This needs a value");
  } else if (enter < 8 || enter > 128) {

    enter = parseInt(prompt("You must choose between 8 and 128"));

  } else {

    confirmNumber = confirm("Will this contain numbers?");
    confirmCharacter = confirm("Will this contain special characters?");
    confirmUppercase = confirm("Will this contain Uppercase letters?");
    confirmLowercase = confirm("Will this contain Lowercase letters?");
  };

  if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    choices = alert("You must choose a criteria!");

  }

  else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

    choices = character.concat(number, alpha, alpha2);
  }
  // This is for 3 positive choices
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
    choices = character.concat(number, alpha2);
  }
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
    choices = character.concat(number, alpha);
  }
  else if (confirmCharacter && confirmLowercase && confirmUppercase) {
    choices = character.concat(alpha, alpha2);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = number.concat(alpha, alpha2);
  }
  // This is for if they choose 2 items positively and 1 negative choice
  else if (confirmCharacter && confirmNumber) {
    choices = character.concat(number);

  } else if (confirmCharacter && confirmLowercase) {
    choices = character.concat(alpha);

  } else if (confirmCharacter && confirmUppercase) {
    choices = character.concat(alpha2);
  }
  else if (confirmLowercase && confirmNumber) {
    choices = alpha.concat(number);

  } else if (confirmLowercase && confirmUppercase) {
    choices = alpha.concat(alpha2);

  } else if (confirmNumber && confirmUppercase) {
    choices = number.concat(alpha2);
  }
  // This is the code for only 1 positive choice
  else if (confirmCharacter) {
    choices = character;
  }
  else if (confirmNumber) {
    choices = number;
  }
  else if (confirmLowercase) {
    choices = alpha;
  }
  // Created space variable for conversion to uppercase
  else if (confirmUppercase) {
    choices = space.concat(alpha2);
  };

  // password variable is an array placeholder for user generated amount of length
  var password = [];

  for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  }
  // This joins the password array and converts it to a string
  var ps = password.join("");
  UserInput(ps);
  return ps;
}
// This puts the password value into the textbox
// Changed function input to use textcontent
function UserInput(ps) {
  document.getElementById("password").textContent = ps;

}

var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
  copyPassword();
});

function copyPassword() {
  document.getElementById("password").select();
  document.commandID("Copy");
  alert("Password copied to clipboard!");
}
