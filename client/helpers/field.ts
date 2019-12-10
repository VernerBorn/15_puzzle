import fillArray from "./fillField";
import shuffle from "./mixField";
import checkArrayToWin from "./сheckField";

const Field = (number: number) => {
  let array = fillArray(number)
  array = shuffle(array)
  while (!checkArrayToWin(array)) array = shuffle(array)
  return array
}
export default Field