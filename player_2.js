const display_pl_2_name = localStorage.getItem(".player-2");
document.querySelector(".enter-player-name").textContent = display_pl_2_name;
const images = document.querySelector(".img-1");
const screen = document.querySelector(".hide-words-div");
const next_pl_btn = document.querySelector(".nxt-pl-link");
const keyboard = document.querySelector(".kb-div");

function hide_keyboard() {
  keyboard.classList.add("hidden");
  next_pl_btn.classList.remove("hidden");
}
let count = 0;

function wrapCharactersInDiv(arr) {
  let curr_arr = count % arr.length;
  let str = arr[curr_arr];
  let wrapped_string = "";

  for (let i = 0; i < str.length; i++) {
    let character = str.charAt(i);
    wrapped_string +=
      '<div class="border">' +
      '<p class ="char">' +
      character +
      "</p>" +
      "</div>";
  }
  count++;
  if (count > arr.length) {
    hide_keyboard();
  }
  return wrapped_string;
}
let my_name = ["yusra", "biya", "shifa"];

let wrapped_string = wrapCharactersInDiv(my_name);
document.getElementById("myElement").innerHTML = wrapped_string;

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
let player_2_score = [];

function update_score() {
  while (score_arr.length < my_name.length) {
    score.innerHTML = "";
    score_counter = score_counter + 5;
    score.append(score_counter);
    score_arr.push(score_counter);
    break;
  }
}
///
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
  let display_new_words = true;

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
      all_ones = true;
    }
  }
  if (all_ones) {
    display_new_words = false;
  }
  if (display_new_words) {
    setTimeout(() => {
      update_score(score_counter);
      player_2_score.shift();
      localStorage.setItem("player_1_score", player_2_score);
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

  if (guessed_word === false) {
    btn.innerHTML = "X";
    btn.style.color = "red";
    btn.style.fontSize = "220%";
    update_imgs();
    let new_str = btn;
    if (!empty_arr.includes(new_str)) {
      empty_arr.push(new_str);
    }
    if (empty_arr.length === 5) {
      hide_keyboard();
    }
  }
}

function display_next_word() {
  for (let i = 0; i < char.length; i++) {
    char[i].remove();
  }
  setTimeout(() => {
    let wrapped_string = wrapCharactersInDiv(my_name);
    document.getElementById("myElement").innerHTML = wrapped_string;
    char = document.querySelectorAll(".char");
    for (let i = 0; i < char.length; i++) {
      char[i].style.opacity = "0";
      char[i].style.transition = "opacity 2s";
    }
  }, "1000");
  empty_arr = [];
  img_index = 1;
}
