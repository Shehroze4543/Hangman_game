const score_1 = localStorage.getItem("player_1_score");
const score_2 = localStorage.getItem("player_2_score");
const pl_1_name = localStorage.getItem("player-1");
const pl_2_name = localStorage.getItem("player-2");
const winner = document.querySelector(".winner-name");

if (score_1 > score_2) {
  winner.innerHTML = pl_1_name;
} else if (score_2 < score_1) {
  winner.innerHTML = pl_2_name;
} else {
  winner.innerHTML = "The game is a tie";
}
