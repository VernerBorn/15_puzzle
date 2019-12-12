import React from 'react';
import { observer } from 'mobx-react-lite';
import { AppContext } from '../App/AppContext';

interface TilesProps {
  number: number;
  index: number;
}
const Tiles = observer(function({ number, index }: TilesProps) {
  const { store } = React.useContext(AppContext);
  const { sizeBoard, currentArray, zeroElement, moveLeft, moveUP, moveRight, moveDown } = store;
  const moveClick = (e: React.SyntheticEvent) => {
    const valueTiles = Number((e.target as HTMLElement).textContent);
    const indexTiles = currentArray.indexOf(valueTiles);
    const sqrtSizeBoard = Math.sqrt(sizeBoard);
    if (indexTiles === zeroElement + 1) {
      moveLeft();
    }
    if (indexTiles === zeroElement + sqrtSizeBoard) {
      moveUP();
    }
    if (indexTiles === zeroElement - 1) {
      moveRight();
    }
    if (indexTiles === zeroElement - sqrtSizeBoard) {
      moveDown();
    }
  };
  return number === 0 ? (
    <div key={index} className={`tiles tiles--${sizeBoard} tiles--none`}></div>
  ) : (
    <div key={index} className={`tiles tiles--${sizeBoard}`} onClick={e => moveClick(e)}>
      {number}
    </div>
  );
});
export default Tiles;
