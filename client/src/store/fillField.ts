const fillField = (number: number, j?: number) => {
  let array: number[] = [];
  for (let i = 0; i < number; i++) {
    array.push(i + (j !== undefined ? j : 0));
  }
  return array;
};
export default fillField;
