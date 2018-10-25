import "./styles/style.css";
import closeModal from "./scripts/closeModal";
import insertMove from "./scripts/insertMove";
import checkIfTerminal from "./scripts/checkIfTerminal";
import reset from "./scripts/reset";
import miniMax from "./scripts/miniMax";
import displayWinner from "./scripts/displayWinner";

//global variables

// let board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let testObject = {};
export let human = "";
export let computer = "";

//click events and querySelects

//First screen->User picks sides
let pickSide = document.querySelector(".pick-a-side");
let x = document.querySelector(".pick-a-side__x");
let o = document.querySelector(".pick-a-side__o");
x.addEventListener("click", pickSideFunctions);
o.addEventListener("click", pickSideFunctions);

//Interactive elements of the tic-tac-toe board
let boardNodes = document.querySelectorAll(".grid__node");
boardNodes.forEach(e => {
  e.addEventListener("click", boardClickFunctions);
});

//Modals that pop up when the user wins, loses or ties.

let winner = document.querySelector(".winner");
let closeWinner = document.querySelector(".winner__close");
let loser = document.querySelector(".loser");
let closeLoser = document.querySelector(".loser__close");
let tie = document.querySelector(".tie");
let closeTie = document.querySelector(".tie__close");

closeWinner.addEventListener("click", endOfGameFunctions);
closeLoser.addEventListener("click", endOfGameFunctions);
closeTie.addEventListener("click", endOfGameFunctions);
//functions
function pickSideFunctions(e) {
  if (e.target == x) {
    human = "X";
    computer = "O";
  } else {
    human = "O";
    computer = "X";
  }
  closeModal(pickSide);
  if (computer == "X") {
    let computerMove = miniMax(board, computer);
    insertMove(boardNodes, computerMove.index, computer);
    board[computerMove.index] = computer;
  }
}

function boardClickFunctions(e) {
  let id = parseInt(e.target.id);
  if (typeof board[id] === "number") {
    insertMove(boardNodes, id, human);
    board[id] = human;
    let computerMove = miniMax(board, computer);
    if (checkIfTerminal(board, human) == "win") {
      displayWinner(board, human, boardNodes);
      winner.style.visibility = "visible";
    } else if (checkIfTerminal(board, human) == "tie") {
      tie.style.visibility = "visible";
    } else {
      insertMove(boardNodes, computerMove.index, computer);
      board[computerMove.index] = computer;
      setTimeout(function() {
        if (checkIfTerminal(board, computer) == "win") {
          displayWinner(board, computer, boardNodes);
          loser.style.visibility = "visible";
        } else if (checkIfTerminal(board, computer) == "tie") {
          tie.style.visibility = "visible";
        }
      }, 300);
    }
  }
}

function endOfGameFunctions(e) {
  e.target.classList.contains("winner__close")
    ? closeModal(winner)
    : e.target.classList.contains("loser__close")
      ? closeModal(loser)
      : closeModal(tie);
  reset(board, boardNodes);
  if (computer == "X") {
    let computerMove = miniMax(board, computer);
    insertMove(boardNodes, computerMove.index, computer);
    board[computerMove.index] = computer;
  }
}
