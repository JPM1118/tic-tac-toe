function displayWinner(board, player, nodeBoard) {
  let nodesToStyle;
  let winningNodes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  nodesToStyle = winningNodes.find(index =>
    index.every(element => board[element] == player)
  );
  return nodesToStyle.forEach(node => {
    nodeBoard[node].style.color = "white";
    nodeBoard[node].style.background = "black";
  });
}
export default displayWinner;
