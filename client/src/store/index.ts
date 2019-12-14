import { observable, action, computed } from 'mobx';

import genField from './genField';

export class store {
  moveZeroElement = (indexMoveTiles: number) => {
    this.currentArray[this.zeroElement] = this.currentArray[indexMoveTiles];
    this.currentArray[indexMoveTiles] = 0;
    this.zeroElement = indexMoveTiles;
    this.stepAll++;
    this.pause = false;
  };

  @observable sizeBoard = 16;
  @observable currentArray: number[] = [];
  @observable zeroElement = 0;
  @observable stepAll = 0;
  @observable seconds = 0;
  @observable pause = true;

  @computed get sqrtSizeBoard() {
    return Math.sqrt(this.sizeBoard);
  }
  @computed get timer() {
    return new Date(this.seconds * 1000)
      .toUTCString()
      .split(/ /)[4]
      .slice(3);
  }

  @action stopTimer = () => {
    console.log('1');
    this.pause = true;
  };

  @action setTimer = () => {
    this.seconds++;
  };

  @action getSizeBoard = (number: number) => {
    this.sizeBoard = number + 1;
    this.currentArray = genField(number + 1);
    this.zeroElement = this.currentArray.indexOf(0);
    this.stepAll = 0;
  };

  @action getArrayTiles = () => {
    this.currentArray = genField(this.sizeBoard);
    this.zeroElement = this.currentArray.indexOf(0);
  };

  @action moveUP = () => {
    const row = this.sqrtSizeBoard;
    const indexMoveTiles = this.zeroElement + row;
    if (indexMoveTiles < this.currentArray.length) {
      this.moveZeroElement(indexMoveTiles);
    }
  };

  @action moveDown = () => {
    const row = this.sqrtSizeBoard;
    const indexMoveTiles = this.zeroElement - row;
    if (indexMoveTiles >= 0) {
      this.moveZeroElement(indexMoveTiles);
    }
  };

  @action moveLeft = () => {
    const row = this.sqrtSizeBoard;
    const indexMoveTiles = this.zeroElement + 1;
    if (indexMoveTiles % row > 0) {
      this.moveZeroElement(indexMoveTiles);
    }
  };

  @action moveRight = () => {
    const row = this.sqrtSizeBoard;
    const indexMoveTiles = this.zeroElement - 1;
    if (indexMoveTiles % row != row - 1 && indexMoveTiles % row >= 0) {
      this.moveZeroElement(indexMoveTiles);
    }
  };
}
