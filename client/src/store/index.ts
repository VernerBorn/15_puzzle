import { observable, action } from 'mobx'

import field from '../../helpers/field';

export class store {
  @observable sizeBoard = 16;
  @observable currentArray = [1, 2, 3, 4, 5, 6, 7, 8, 0];
  @action getSizeBoard = (number: number) => {
    this.sizeBoard = number + 1;
    this.currentArray = field(number + 1)
  }
  @action getArrayTiles = () => this.currentArray = field(this.sizeBoard)

}