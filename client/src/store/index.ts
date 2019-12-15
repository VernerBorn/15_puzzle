import { observable, action, computed } from 'mobx';

import genField from './genField';
import fillField from './fillField';

export class store {
  @observable sizeField = 16;
  @observable currentArray: number[] = [];
  @observable indexZeroElement = 0;
  @observable totalStep = 0;
  @observable secPassed = 0;
  @observable isPause = true;
  @observable isFinishGame = false;

  moveZeroElement = (indexMoveTiles: number) => {
    this.currentArray[this.indexZeroElement] = this.currentArray[indexMoveTiles];
    this.currentArray[indexMoveTiles] = 0;
    this.indexZeroElement = indexMoveTiles;
    this.totalStep++;
    this.isFinishGame = this.currentArray.toString() == this.winArray.toString() ? true : false;
    this.isPause = this.isFinishGame;
  };

  @computed get numberСolumns() {
    return Math.sqrt(this.sizeField);
  }

  @computed get winArray() {
    let arr = fillField(this.sizeField, 1);
    arr[arr.length - 1] = 0;
    return arr;
  }

  @computed get secTransform() {
    return new Date(this.secPassed * 1000)
      .toUTCString()
      .split(/ /)[4]
      .slice(3);
  }

  @computed get positionСheck() {
    let check: { [key: number]: boolean } = {};
    this.currentArray.reduce((prev, value, i) => {
      if (prev) {
        const valueCheck = value === i + 1;
        check[value] = valueCheck;
        return valueCheck;
      } else {
        check[value] = false;
        return false;
      }
    }, true);
    return check;
  }

  @action stopTimer = () => {
    this.isPause = true;
  };

  @action addSecond = () => {
    this.secPassed++;
  };

  @action getSizeBoard = (number: number) => {
    this.sizeField = number + 1;
    this.getArrayTiles();
  };

  @action getArrayTiles = () => {
    this.currentArray = genField(this.sizeField);
    this.indexZeroElement = this.currentArray.indexOf(0);
    this.totalStep = 0;
    this.secPassed = 0;
    this.isFinishGame = false;
    this.isPause = true;
  };

  @action moveUP = () => {
    const indexMoveTiles = this.indexZeroElement + this.numberСolumns;
    if (indexMoveTiles < this.currentArray.length) {
      this.moveZeroElement(indexMoveTiles);
    }
  };

  @action moveDown = () => {
    const indexMoveTiles = this.indexZeroElement - this.numberСolumns;
    if (indexMoveTiles >= 0) {
      this.moveZeroElement(indexMoveTiles);
    }
  };

  @action moveLeft = () => {
    const indexMoveTiles = this.indexZeroElement + 1;
    const remainder = indexMoveTiles % this.numberСolumns;
    if (remainder > 0) {
      this.moveZeroElement(indexMoveTiles);
    }
  };

  @action moveRight = () => {
    const indexMoveTiles = this.indexZeroElement - 1;
    const remainder = indexMoveTiles % this.numberСolumns;
    if (remainder != this.numberСolumns - 1 && remainder >= 0) {
      this.moveZeroElement(indexMoveTiles);
    }
  };
}
