import React, { useEffect } from 'react';
import { AppContext } from '../App/AppContext';

interface keyCodeMap {
  [key: number]: string;
}
interface actionMove {
  [key: string]: void;
}

const useMovement = () => {
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

  const actionMove: actionMove = {
    left: moveLeft(),
    up: moveUP(),
    right: moveRight(),
    down: moveDown()
  };

  const handleKey = (event: KeyboardEvent) => {
    const modifiers = event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;
    const mapped = keyCodeMap[event.which];
    if (!modifiers) {
      if (mapped !== undefined) {
        event.preventDefault();
        console.log(mapped);
        actionMove[mapped];
      }
    }
  };

  const listenKey = () => {
    window.document.addEventListener('keydown', handleKey);
  };

  let touchStartClientX: number, touchStartClientY: number;

  const eventTouchStartListner = (e: TouchEvent) => {
    if (e.touches.length == e.targetTouches.length ? true : false) {
    } else {
      touchStartClientX = e.touches[0].clientX;
      touchStartClientY = e.touches[0].clientY;
    }
  };
  const eventTouchendListner = (e: TouchEvent) => {
    let touchEndClientX, touchEndClientY;
    if (e.touches.length == e.targetTouches.length ? true : false) {
    } else {
      touchEndClientX = e.touches[0].clientX;
      touchEndClientY = e.touches[0].clientY;
    }
    if (touchEndClientX && touchEndClientY) {
      const dx = touchEndClientX - touchStartClientX;
      const absDx = Math.abs(dx);

      const dy = touchEndClientY - touchStartClientY;
      const absDy = Math.abs(dy);

      if (Math.max(absDx, absDy) > 10) {
        absDx > absDy
          ? dx < 0
            ? actionMove.left
            : actionMove.right
          : dy < 0
          ? actionMove.up
          : actionMove.down;
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
    listenKey();
    listenSwipe();
    return () => removeEventListeners();
  });
};
export default useMovement;
