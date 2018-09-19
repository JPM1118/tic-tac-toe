function reset(moveArr, displayedArr) {
  moveArr.forEach((curValue, idx, array) => {
    array[idx] = idx;
  });
  displayedArr = displayedArr.forEach(idx => {
    idx.textContent = "";
    idx.style.color = "black";
    idx.style.background = "white";
  });
}

export default reset;
