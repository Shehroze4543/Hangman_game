const words = [
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

get_word = function (number) {
  return shuffle(words).slice(0, number);
};
console.log(get_word(10));
console.log(get_word(10));
console.log(get_word(10));
console.log(get_word(10));
