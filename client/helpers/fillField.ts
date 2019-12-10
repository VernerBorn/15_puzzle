const fillField = (number: number) => {
  let array: number[] = []
  for (let i = 0; i < number; i++) {
    array.push(i);
  }
  return array
}
export default fillField