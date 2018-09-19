function insertMove(array, idx, symbol) {
  if (array[idx].textContent == "") {
    array[idx].textContent = symbol;
  }
}

export default insertMove;
