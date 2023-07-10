// Player 1 name
const display_pl_1_name = localStorage.getItem("player-1");
//player 1 initial score
const initla_val = 0;
// Set the value of "player_1_score" in localStorage to initial_val
localStorage.setItem("player_1_score", initla_val);

// My DOM Elements
const screen = document.querySelector(".hide-words-div");
const img_box = document.querySelector(".img-div");
const images = document.querySelector(".img-1");
const next_pl_btn = document.querySelector(".nxt-pl-link");
const keyboard = document.querySelector(".kb-div");

document.querySelector(".enter-player-name").textContent = display_pl_1_name;

// func to hide keyboard after the player exceeds the number of wrong guesses
function hide_keyboard() {
  keyboard.classList.add("hidden");
  next_pl_btn.classList.remove("hidden");
}

// func to hide and then wrap each character in a box
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
    hide_keyboard();
    img_box.style.opacity = "0";
    return "";
  }
  return wrappedString;
}
let my_name = ["sh", "ss", "ss"];

let wrappedString = wrapCharactersInDiv(my_name);
document.getElementById("myElement").innerHTML = wrappedString;
let char = document.querySelectorAll(".char");
for (let i = 0; i < char.length; i++) {
  char[i].style.opacity = "0";
  char[i].style.transition = "opacity 2s";
}

const score = document.querySelector(".score");
let score_counter = 0;
let increment = 5;
let score_arr = [];
score.append(score_counter);
let player_1_score = [];

function update_score() {
  while (score_arr.length < my_name.length) {
    score.innerHTML = "";
    score_counter = score_counter + increment;
    score.append(score_counter);
    score_arr.push(score_counter);
    break;
  }
}
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
/////////////////////////////////////////////////////////////
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

//func to reveal characters and control the game flow based on the player's game

function reveal_words(alphabet) {
  let btn = document.getElementById(alphabet);
  // if the player makes a wrong guess
  let guessed_word = false;

  //if all of the characters inside the box are revealed
  let all_opacity = true;

  // if the player is able to guess the word
  let display_new_words = true;

  const char = document.querySelectorAll(".char");
  //check if a specific alphabet character matches the inner HTML of any element,
  // and modify the opacity and boolean variables accordingly.
  for (let i = 0; i < char.length; i++) {
    if (alphabet === char[i].innerHTML) {
      char[i].style.opacity = "1";
      guessed_word = true;
      all_opacity = false;
    }
  }
  //check if any char el  in the array has an opacity of "1",
  // and sets the variable "all_opacity" to true if any such element is found.
  for (let i = 0; i < char.length; i++) {
    if (char[i].style.opacity !== "1") {
      all_opacity = true;
    }
  }
  if (all_opacity) {
    display_new_words = false;
  }
  if (display_new_words) {
    setTimeout(() => {
      update_score(score_counter);
      player_1_score.shift();
      player_1_score.push(score_counter);
      localStorage.setItem("player_1_score", player_1_score);
      display_next_word();
      img_index = 0;
      update_imgs();

      let key = document.querySelectorAll(".key");
      for (let i = 0; i < key.length; i++) {
        key[i].innerHTML = alphabets_arr[i];
        key[i].style.color = "whitesmoke";
      }
      guessed_word = true;
    }, "1000");
  }

  // if the guessed word is wrong
  if (guessed_word === false) {
    btn.innerHTML = "X";
    btn.style.color = "red";
    update_imgs();
    let new_str = btn;
    if (!empty_arr.includes(new_str)) {
      empty_arr.push(new_str);
    }
    //if the player is not able to guess the word
    if (empty_arr.length === 5) {
      hide_keyboard();
      for (let i = 0; i < char.length; i++) {
        char[i].style.opacity = "1";
      }
    }
  }
}

// func to display next word
function display_next_word() {
  for (let i = 0; i < char.length; i++) {
    char[i].remove();
  }

  setTimeout(() => {
    let wrappedString = wrapCharactersInDiv(my_name);
    document.getElementById("myElement").innerHTML = wrappedString;
    let char = document.querySelectorAll(".char");

    for (let i = 0; i < char.length; i++) {
      char[i].style.opacity = "0";
      char[i].style.transition = "opacity 2s";
    }
  }, "1000");
  empty_arr = [];
  img_index = 1;
}
let my_country = ["c", "guatemala", "kazakhstan", "azerbaijan"];
let my_animal = ["c", "hummingbird", "nightingale", "rattlesnake"];
let hide_box = document.querySelector(".my-box");

//if the player chooses country category
function chose_country() {
  hide_box.style.opacity = "1";
  keyboard.style.opacity = "1";
  img_box.style.opacity = "1";
  img_box.style.transition = "opacity 1s";
  hide_box.style.transition = "opacity 1s";
  keyboard.style.transition = "opacity 5s";
  let cat = document.querySelectorAll(".cat");
  for (let i = 0; i < cat.length; i++) {
    cat[i].classList.add("hidden");
  }

  my_name.splice(0, my_name.length, ...my_country);
  let wrappedString = wrapCharactersInDiv(my_name);
  document.getElementById("myElement").innerHTML = wrappedString;

  char = document.querySelectorAll(".char");
  for (let i = 0; i < char.length; i++) {
    char[i].style.opacity = "0";
    char[i].style.transition = "opacity 2s";
  }
}
//if the player chooses animal category
function chose_animal() {
  hide_box.style.opacity = "1";
  keyboard.style.opacity = "1";
  img_box.style.opacity = "1";
  img_box.style.transition = "opacity 1s";
  hide_box.style.transition = "opacity 1s";
  keyboard.style.transition = "opacity 5s";
  let cat = document.querySelectorAll(".cat");
  for (let i = 0; i < cat.length; i++) {
    cat[i].classList.add("hidden");
  }

  my_name.splice(0, my_name.length, ...my_animal);
  let wrappedString = wrapCharactersInDiv(my_name);
  document.getElementById("myElement").innerHTML = wrappedString;
  char = document.querySelectorAll(".char");
  for (let i = 0; i < char.length; i++) {
    char[i].style.opacity = "0";
    char[i].style.transition = "opacity 2s";
  }
}
