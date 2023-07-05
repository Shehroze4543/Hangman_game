const display_pl_2_name = localStorage.getItem("player-2");
document.querySelector(".enter-player-name").textContent = display_pl_2_name;
const images = document.querySelector(".img-1");
const screen = document.querySelector(".hide-words-div");

const score_player_2 = 50;

const score_1 = localStorage.getItem("player_1_score");
localStorage.setItem("player_2_score", score_player_2);
const score_2 = localStorage.getItem("player_2_score");
console.log(score_1);
console.log(score_2 > score_1);
