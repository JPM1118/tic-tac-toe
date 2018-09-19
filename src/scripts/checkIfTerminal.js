function checkIfTerminal(arr, player) {
  if (
    (arr[0] == player && arr[1] == player && arr[2] == player) ||
    (arr[3] == player && arr[4] == player && arr[5] == player) ||
    (arr[6] == player && arr[7] == player && arr[8] == player) ||
    (arr[0] == player && arr[3] == player && arr[6] == player) ||
    (arr[1] == player && arr[4] == player && arr[7] == player) ||
    (arr[2] == player && arr[5] == player && arr[8] == player) ||
    (arr[0] == player && arr[4] == player && arr[8] == player) ||
    (arr[2] == player && arr[4] == player && arr[6] == player)
  ) {
    return "win";
  }
  if (arr.filter(idx => typeof idx == "number").length == 0) {
    return "tie";
  } else {
    return false;
  }
}

export default checkIfTerminal;
