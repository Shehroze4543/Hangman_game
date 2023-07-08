const score_1 = localStorage.getItem("player_1_score");
const score_2 = localStorage.getItem("player_2_score");
const pl_1_name = localStorage.getItem("player-1");
const pl_2_name = localStorage.getItem("player-2");
const winner = document.querySelector(".winner-name");
const winner_div = document.querySelector(".winner-div");
const center_div = document.querySelector(".center-div");
const tie = document.querySelector(".tie");
////////////////////////////////////////////
tie.classList.add("hidden");
winner_div.classList.add("hidden");
///////////////////////////////////////////
const name_pl_1 = document.querySelector(".player-1");
const name_pl_2 = document.querySelector(".player-2");
const score_pl_1 = document.querySelector(".player--1--score");
const score_pl_2 = document.querySelector(".player--2--score");
const box_1 = document.querySelector(".box-1");
const box_2 = document.querySelector(".box-2");
name_pl_1.append(pl_1_name);
name_pl_2.append(pl_2_name);
score_pl_1.append(score_1);
score_pl_2.append(score_2);
setTimeout(() => {
  box_1.style.opacity = "1";
  box_1.style.transition = "opacity 1s ease-out";
}, "1000");
setTimeout(() => {
  box_2.style.opacity = "1";
  box_2.style.transition = "opacity 2s ease-out";
}, "2500");

if (parseInt(score_1) > parseInt(score_2)) {
  setTimeout(() => {
    winner_div.classList.remove("hidden");
    winner.innerHTML = pl_1_name;
  }, "5000");
} else if (parseInt(score_1) < parseInt(score_2)) {
  setTimeout(() => {
    winner_div.classList.remove("hidden");
    winner.innerHTML = pl_2_name;
  }, "5000");
} else if (parseInt(score_1) === parseInt(score_2)) {
  setTimeout(() => {
    tie.classList.remove("hidden");
  }, "5000");
}

//localStorage.removeItem(player_1_score);

console.log("score 1 is " + score_1);
console.log("score 2 is " + score_2);
console.log("player 1 is " + pl_1_name);
console.log("player 2 is " + pl_2_name);
console.log(parseInt(score_1) > parseInt(score_2));
console.log(typeof parseInt(score_1));
console.log(typeof parseInt(score_2));
