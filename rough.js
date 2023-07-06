const display_pl_1_name = localStorage.getItem("player-1");
const screen = document.querySelector(".hide-words-div");
const images = document.querySelector(".img-1");
document.querySelector(".enter-player-name").textContent = display_pl_1_name;

// ARRAY OF WORDS for Player 1

const words_arr = [
  "asd",
  "bangladesh",
  "madagascar",
  "switzerland",
  "indonesia",
  "afghanistan",
  "guatemala",
  "kazakhstan",
  "mauritius",
  "tanzania",
];
// let words_index = 0;
// function update_words() {
//   let x = words_arr[words_index];
//   words_index++;
//   if (words_index > words_arr.length) {
//     words_index = 9;
//   }
//   return x;
// }

// console.log(update_words(words_arr));

// A function that would pick a random word from the above array

//let hidden_word = words_arr[random_word];
//screen.append(hide_words(hidden_word));

// function hide_words(str) {
//   //let new_str = str.split("").join(" ");
//   let new_str = str.split(" ").join(",");
//   //return new_str;
//   return new_str;
// }

//console.log(hide_words(hidden_word));
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
let count = 0;
function wrapCharactersInDiv(arr) {
  let curr_arr = count % arr.length;
  let str = arr[curr_arr];

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
  count++;
  if (count > arr.length) {
    alert(`finished`);
  }
  return wrappedString;
}
//////////////

/////////////

let my_name = ["ali", "shigri", "bano"];
let wrappedString = wrapCharactersInDiv(my_name);
document.getElementById("myElement").innerHTML = wrappedString;

// loop over all classes to hide the opacity in each class
///function to hide the words

////////////
// all of my character classes
let char = document.querySelectorAll(".char");
for (let i = 0; i < char.length; i++) {
  char[i].style.opacity = "0";
  char[i].style.transition = "opacity 2s";
}

let my_name_index = 0;
////////////////////////////////////////

console.log(`//////////////////`);
const score = document.querySelector(".score");
let score_counter = 0;
let increment = 5;
let score_arr = [];
score.append(score_counter);
let player_1_score = [];

function update_score() {
  while (score_arr.length < my_name.length) {
    score.innerHTML = "";
    score_counter = score_counter + 5;
    score.append(score_counter);
    score_arr.push(score_counter);
    break;
  }
}

// function final_score() {
//   while (score_arr.length > my_name.length) {
//     player_1_score.push(score_counter);
//     console.log(player_1_score);
//   }
// }
// function score_pl_1(arr) {
//   return arr.reduce((acc, cur) => acc + cur, 0);
// }
// IMAGE ARRAY AND IMAGE FUNCTIONS

/////////////////////////////////////////////////////////////

const images_arr = [
  "https://www.oligalma.com/downloads/images/hangman/hangman/0.jpg",
  "https://www.oligalma.com/downloads/images/hangman/hangman/1.jpg",
  "https://www.oligalma.com/downloads/images/hangman/hangman/3.jpg",
  "https://www.oligalma.com/downloads/images/hangman/hangman/6.jpg",
  "https://www.oligalma.com/downloads/images/hangman/hangman/8.jpg",
  "https://www.oligalma.com/downloads/images/hangman/hangman/10.jpg",
];
let img_index = 1;
function update_imgs() {
  images.setAttribute("src", images_arr[img_index]);
  img_index++;
  if (img_index > images_arr.length) {
    img_index = 4;
  }
}

let empty_arr = [];
let alphabets_arr = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];
function reveal_words(alphabet) {
  let btn = document.getElementById(alphabet);

  let guessed_word = false;
  let all_ones = true;
  let display_new_word = true;
  //let all_guessed_words = true;
  const char = document.querySelectorAll(".char");

  for (let i = 0; i < char.length; i++) {
    if (alphabet === char[i].innerHTML) {
      char[i].style.opacity = "1";
      guessed_word = true;
      all_ones = false;
    }
  }

  for (let i = 0; i < char.length; i++) {
    if (char[i].style.opacity !== "1") {
      //all_guessed_words = false;
      all_ones = true;
    }
  }

  if (all_ones) {
    display_new_word = false;
  }

  if (display_new_word) {
    setTimeout(() => {
      update_score(score_counter);
      player_1_score.shift();
      player_1_score.push(score_counter);
      console.log(player_1_score);
      localStorage.setItem("player_1_score", player_1_score);
      display_next_word();
      img_index = 0;
      update_imgs();

      let key = document.querySelectorAll(".key");
      for (let i = 0; i < key.length; i++) {
        key[i].innerHTML = alphabets_arr[i];
        key[i].style.color = "black";
      }
      guessed_word = true;
    }, "1000");
  }
  // if (all_guessed_words) {
  //   console.log(`ALL WORDS HAVE BEEN GUESSED`);
  //   //update_score(score_counter);
  // }
  if (guessed_word === false) {
    btn.innerHTML = "X";
    btn.style.color = "red";
    btn.style.fontSize = "220%";
    update_imgs();
    //btn.onclick = null;
    //empty_arr.push(btn);
    console.log(empty_arr);
    let new_str = btn;
    if (!empty_arr.includes(new_str)) {
      empty_arr.push(new_str);
    }
    console.log(new_str);
    console.log(empty_arr);
    if (empty_arr.length === 5) {
      setTimeout(() => {
        alert(`GAME OVER`);
      }, "1000");
    }
  }
}

function display_next_word() {
  for (let i = 0; i < char.length; i++) {
    char[i].remove();
  }

  setTimeout(() => {
    let wrappedString = wrapCharactersInDiv(my_name);
    document.getElementById("myElement").innerHTML = wrappedString;
    //hh_ii();
    char = document.querySelectorAll(".char");

    for (let i = 0; i < char.length; i++) {
      char[i].style.opacity = "0";
      char[i].style.transition = "opacity 2s";
    }
  }, "1000");
  empty_arr = [];
  img_index = 1;
  //console.log(empty_arr);
}

console.log(player_1_score);

const score_1 = localStorage.getItem("player_1_score", player_1_score);
// if (my_name_index < my_name.length) {
//   my_name_index++;
//   let next_worddd = my_name[my_name_index];
//   document.getElementById("myElement").innerHTML =
//     wrapCharactersInDiv(next_worddd);
//   for (let i = next_worddd; i < char.length; i++) {
//     console.log(char[i].innerHTML);
//   }
//hh_ii();
// for (let i = 0; i < char.length; i++) {
//   if (alphabet === char[i].innerHTML) {
//     char[i].style.opacity = "1";
//     guessed_word = true;
//     display_new_word = false;
//   }
// }
// } else {
//   console.log(`no more words`);
// }
//}
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
