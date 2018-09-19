import checkIfTerminal from "./checkIfTerminal";
import { computer, human } from "./../index";

function miniMax(newArray, player) {
  if (checkIfTerminal(newArray, player) === "tie") {
    return { score: 0 };
  } else if (checkIfTerminal(newArray, computer) === "win") {
    return { score: 10 };
  } else if (checkIfTerminal(newArray, human) === "win") {
    return { score: -10 };
  }
  let values = [];

  newArray.filter(x => typeof x == "number").forEach(i => {
    let value = {};
    value.index = i;
    newArray[i] = player;
    let result = miniMax(newArray, player == human ? computer : human);
    value.score = result.score;
    newArray[i] = value.index;
    values.push(value);
  });
  let bestValue;
  if (player === computer) {
    let bestScore = -10000;
    for (let i = 0; i < values.length; i++) {
      if (values[i].score > bestScore) {
        bestScore = values[i].score;
        bestValue = i;
      }
    }
  } else {
    let bestScore = 10000;
    for (let i = 0; i < values.length; i++) {
      if (values[i].score < bestScore) {
        bestScore = values[i].score;
        bestValue = i;
      }
    }
  }
  let returnScore = values[bestValue];
  return returnScore;
}

export default miniMax;
