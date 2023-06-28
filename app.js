const display_pl_1_name = localStorage.getItem("player-1");
const display_pl_2_name = localStorage.getItem("player-2");
const screen = document.querySelector(".hide-words-div");

document.querySelector(".enter-player-name").textContent = display_pl_1_name;

// ARRAY OF WORDS for Player 1

const words_arr = [
  "witchcraft",
  "wristwatch",
  "jukebox",
  "kiwifruit",
  "knapsack",
  "peekaboo",
  "awkward",
  "microwave",
  "syndrome",
  "knapsack",
];

// A function that would pick a random word from the above array
let random_word = Math.floor(Math.random() * words_arr.length);
let hidden_word = words_arr[random_word];
screen.append(hide_words(hidden_word));

function hide_words(str) {
  let new_str = str.split("").join(" ");
  return new_str;
}

console.log(hide_words(hidden_word));
// A counter variable for the wrong guess

//  a variable that keeps track of the maximum number of wrong guesses that are allowed.

// function to see if the letter that is guessed is right or wrong

// function to update the hangman images when the player makes a wrong guess

// function to change the secret word by adding the letter that was guessed correctly.

// function to display game over when the player reaches the max number of wrong guesses

// function to reset the game whenever the player presses the RESET BUTTON

// function  to switch player from player 1 to player 2

// function to calculte both player 1 and player 2 scores indivually

//function to compare both scores and determine the winner

// a function to restart the game

function wrapCharactersInDiv(str) {
  var wrappedString = "";

  for (var i = 0; i < str.length; i++) {
    var character = str.charAt(i);
    wrappedString +=
      '<div class="border">' +
      '<p class="char">' +
      character +
      "</p>" +
      "</div>";
  }

  return wrappedString;
}
var myString = "shehroze";
var wrappedString = wrapCharactersInDiv(myString);
document.getElementById("myElement").innerHTML = wrappedString;

const char = document.querySelectorAll(".char");
for (let i = 0; i < char.length; i++) {
  char[i].style.opacity = "0";
  console.log(char[i].innerHTML);
}

function reveal_words() {
  let e = document.getElementById("e");
  for (let i = 0; i < char.length; i++) {
    if (char[i].innerHTML === e.innerHTML) {
      char[i].style.opacity = "1";
    }
  }
}
