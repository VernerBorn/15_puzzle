import fillArray from "./fillArrayNumbers";
import shuffle from "./shuffleArrayNumber";
import checkArrayToWin from "./checkArrayWin";

const arrayGame = (number: number) => {
  let array = fillArray(number)
  array = shuffle(array)
  while (!checkArrayToWin(array)) array = shuffle(array)
  return array
}
export default arrayGame