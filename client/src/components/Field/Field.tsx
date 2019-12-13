import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { AppContext } from '../App/AppContext';

import useMovement from './useMovement';

import Tiles from '../Tiles/Tiles';

interface keyCodeMap {
  [key: number]: string;
}
interface actionMove {
  [key: string]: void;
}

const Board = observer(function() {
  const { store } = React.useContext(AppContext);
  const { moveLeft, moveUP, moveRight, moveDown } = store;

  const keyCodeMap: keyCodeMap = {
    //  Keyboard arrows
    37: 'Left',
    38: 'Up',
    39: 'Right',
    40: 'Down',
    //  A, W, D, S
    65: 'Left',
    87: 'Up',
    68: 'Right',
    83: 'Down'
  };

  // const actionMove: actionMove = {
  //   left: moveLeft(),
  //   up: moveUP(),
  //   right: moveRight(),
  //   down: moveDown()
  // };

  let touchStartClientX: number, touchStartClientY: number;

  const eventTouchStartListner = (e: TouchEvent) => {
    if (e.touches.length == e.targetTouches.length ? false : true) {
    } else {
      touchStartClientX = e.changedTouches[0].pageX;
      touchStartClientY = e.changedTouches[0].pageY;
    }
  };
  const eventTouchendListner = (e: TouchEvent) => {
    if (e.touches.length == e.targetTouches.length ? false : true) {
    } else {
      const touchEndClientX = e.changedTouches[0].pageX;
      const touchEndClientY = e.changedTouches[0].pageY;
      const dx = touchEndClientX - touchStartClientX;
      const absDx = Math.abs(dx);
      const dy = touchEndClientY - touchStartClientY;
      const absDy = Math.abs(dy);
      if (Math.max(absDx, absDy) > 40) {
        console.log(absDx, absDy);
        absDx > absDy ? (dx < 0 ? moveLeft() : moveRight()) : dy < 0 ? moveUP() : moveDown();
      }
    }
  };
  const listenSwipe = () => {
    window.document.addEventListener('touchstart', eventTouchStartListner);
    window.document.addEventListener('touchend', eventTouchendListner);
  };
  const removeEventListeners = () => {
    window.document.removeEventListener('keydown', handleKey);
    window.document.removeEventListener('touchstart', eventTouchStartListner);
    window.document.removeEventListener('touchend', eventTouchendListner);
  };
  useEffect(() => {
    listenSwipe();
    store.getArrayTiles();
    return () => removeEventListeners();
  }, [store.getSizeBoard]);

  const renderTiles: JSX.Element[] = store.currentArray.map((number: number, i: number) => (
    <Tiles number={number} index={i} />
  ));

  return <div className="field">{renderTiles}</div>;
});
export default Board;
