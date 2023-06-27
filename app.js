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
screen.append(hidden_word);

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
