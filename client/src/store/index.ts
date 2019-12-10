import { observable, action } from 'mobx'

import shuffleArray from '../../helpers/shuffleArrayNumber';
import fillArray from '../../helpers/fillArrayNumbers';
import arrayGame from '../../helpers/ArrayGame';

export class store {
  @observable sizeBoard = 16;
  @observable currentArray = [1, 2, 3, 4, 5, 6, 7, 8, 0];
  @action getSizeBoard = (number: number) => {
    this.sizeBoard = number + 1;
    this.currentArray = arrayGame(number + 1)
  }
  @action getArrayTiles = () => this.currentArray = arrayGame(this.sizeBoard)

}