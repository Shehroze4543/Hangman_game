const score_1 = localStorage.getItem("player_1_score");
const score_2 = localStorage.getItem("player_2_score");
let my_name;
if (score_1 === score_2) {
  my_name = ["yusra"];
} else {
  my_name = ["biya"];
}

console.log(my_name);
