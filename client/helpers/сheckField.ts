const сheckField = (array: number[]) => {
  const gridWidth = Math.trunc(Math.sqrt(array.length));
  let parity = 0, row = 0, blankRow = 0;
  for (let i = 0; i < array.length; i++) {
    if (i % gridWidth == 0) {
      row++;
    }
    if (array[i] == 0) {
      blankRow = row;
      continue;
    }
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j] && array[j] != 0) {
        parity++;
      }
    }
  }

  if (gridWidth % 2 == 0) {
    if (blankRow % 2 == 0) {
      return parity % 2 == 0;
    } else {
      return parity % 2 != 0;
    }
  } else {
    return parity % 2 == 0;
  }
}
export default сheckField