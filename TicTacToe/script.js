const winCondition = [
  [1, 2, 3], 
  [4, 5, 6], 
  [7, 8, 9], 
  [1, 5, 9],
  [3, 5, 7],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9]
];

const board_item = document.querySelectorAll('.board-item')

function resetBoard() {}

const player = (isPlayer1,step, isWin) => {
  const move = (pos) => {
    const boardPlayer = board_item[pos-1]
    if (isPlayer1) {
      boardPlayer.classList.add('isX');
      boardPlayer.textContent = 'X'
    }
    else{
      boardPlayer.classList.add('isO');
      boardPlayer.textContent = 'O'
    }
    if (step.length !== 3) {
      step.push(pos)
    }
    else {
      winCondition.forEach(element => {
        if(arraysAreEqual(element, step))
        isWin = true;
      });
      isWin = false;
    }
  }
  return {step, isWin, move}
}

function arraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}