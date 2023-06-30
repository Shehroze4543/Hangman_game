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
  let wrappedString = "";

  for (let i = 0; i < str.length; i++) {
    let character = str.charAt(i);
    wrappedString +=
      '<div class="border">' +
      '<p class="char">' +
      character +
      "</p>" +
      "</div>";
  }

  return wrappedString;
}
let myString = hidden_word;
let wrappedString = wrapCharactersInDiv(myString);
document.getElementById("myElement").innerHTML = wrappedString;

// all of my character classes
const char = document.querySelectorAll(".char");

// loop over all classes to hide the opacity in each class
for (let i = 0; i < char.length; i++) {
  char[i].style.opacity = "0";
  char[i].style.transition = "opacity 2s";
}
console.log(`//////////////////`);
const score = document.querySelector(".score");
let score_counter = 0;
score.append(score_counter);

function update_score(s) {
  score.innerHTML = "";
  s++;
  score.append(s);
}
let empty_arr = [];
function reveal_words(alphabet) {
  let btn = document.getElementById(alphabet);
  let guessed_word = false;
  for (let i = 0; i < char.length; i++) {
    if (alphabet === char[i].innerHTML) {
      char[i].style.opacity = "1";
      guessed_word = true;
    }
  }
  let all_guessed_words = true;
  for (let i = 0; i < char.length; i++) {
    if (char[i].style.opacity !== "1") {
      all_guessed_words = false;
    }
  }
  if (all_guessed_words) {
    update_score(score_counter);
    guessed_word = false;
  }

  if (guessed_word === false) {
    btn.innerHTML = "X";
    btn.style.color = "red";
    btn.style.fontSize = "220%";
    btn.onclick = null;
    empty_arr.push(btn);
    console.log(empty_arr);
    if (empty_arr.length >= 5) {
      alert(`game over`);
    }
  }
}
console.log(empty_arr);

// const char = document.querySelectorAll(".char");
// let s = document.getElementById("s");
// // let h = document.getElementById("h");
// // let r = document.getElementById("r");
// // let o = document.getElementById("o");
// // let z = document.getElementById("z");
// // let a = document.getElementById("a");
// // let b = document.getElementById("b");
// // let c = document.getElementById("c");
// // let d = document.getElementById("d");
// let char_arr = Array.from(char);
// char_arr.forEach((char) => {
//   let index = char_arr.indexOf(char);
//   if (s.innerHTML === char.innerHTML) {
//     return (index.style.color = "red");
//   }
// });
//   const chars = document.querySelectorAll(".char");
//   let s = document.getElementById("s");
//   let e = document.getElementById("e");

//   let char_arr = Array.from(chars);
//   char_arr.forEach((char) => {
//     if (word === char.innerHTML) {
//       word.style.opacity = "1"; // Change the opacity value as needed
//     }
//     if (e.innerHTML === char.innerHTML) {
//       char.style.opacity = "1"; // Change the opacity value as needed
//     }
//   });
// }
//   for (let i = 0; i < char.length; i++) {
//     if (char[i] === s.innerHTML) {
//       index = i;
//       break;
