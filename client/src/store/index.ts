import { observable, action } from 'mobx'

import genField from '../../helpers/genField';

export class store {
  @observable sizeBoard = 16;
  @observable currentArray: number[] = [];
  @observable zeroElement = 0;
  @action getSizeBoard = (number: number) => {
    this.sizeBoard = number + 1;
    this.currentArray = genField(number + 1)
    this.zeroElement = this.currentArray.indexOf(0)
  }
  @action getArrayTiles = () => {
    this.currentArray = genField(this.sizeBoard)
    this.zeroElement = this.currentArray.indexOf(0)
  }
  @action moveUP = () => {
    const sqrtSizeBoard = Math.sqrt(this.sizeBoard)
    const indexMoveTiles = this.zeroElement + sqrtSizeBoard
    if (indexMoveTiles < this.currentArray.length) {
      this.currentArray[this.zeroElement] = this.currentArray[indexMoveTiles]
      this.currentArray[indexMoveTiles] = 0
      this.zeroElement = indexMoveTiles
    }
  }
  @action moveDown = () => {
    const sqrtSizeBoard = Math.sqrt(this.sizeBoard)
    const indexMoveTiles = this.zeroElement - sqrtSizeBoard
    if (indexMoveTiles >= 0) {
      this.currentArray[this.zeroElement] = this.currentArray[indexMoveTiles]
      this.currentArray[indexMoveTiles] = 0
      this.zeroElement = indexMoveTiles
    }
  }
  @action moveLeft = () => {
    const sqrtSizeBoard = Math.sqrt(this.sizeBoard)
    const indexMoveTiles = this.zeroElement + 1
    if (indexMoveTiles % sqrtSizeBoard > 0) {
      this.currentArray[this.zeroElement] = this.currentArray[indexMoveTiles]
      this.currentArray[indexMoveTiles] = 0
      this.zeroElement = indexMoveTiles
    }
  }
  @action moveRight = () => {
    const sqrtSizeBoard = Math.sqrt(this.sizeBoard)
    const indexMoveTiles = this.zeroElement - 1
    if (indexMoveTiles % sqrtSizeBoard != sqrtSizeBoard - 1) {
      this.currentArray[this.zeroElement] = this.currentArray[indexMoveTiles]
      this.currentArray[indexMoveTiles] = 0
      this.zeroElement = indexMoveTiles
    }
  }
}