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

const player = (isPlayer1,step, isWin) => {
  const move = (pos) => {
    step.push(pos)
    winCondition.forEach(element => {
      if(arraysAreEqual(step, element)){
        isWin = true;
        // console.log(isWin);
      }
    });
    return isWin;
  }
  const getIsWin = () => {
    return move() // Call the move function to calculate isWin
  };
  return {step, getIsWin, move}
}

function arraysAreEqual(arr1, arr2) {
  let index = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[index]) {
      index++;
    }
    if (index === 3) return true
  }

  return false;
}