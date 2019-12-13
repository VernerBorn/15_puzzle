import { useEffect } from 'react';

interface actionMove {
  [key: string]: () => void;
}

interface keyCodeMap {
  [key: number]: string;
}

export default function useKeySwipeMove(actionMove: actionMove) {
  const keyCodeMap: keyCodeMap = {
    //  Keyboard arrows
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    //  A, W, D, S
    65: 'left',
    87: 'up',
    68: 'right',
    83: 'down'
  };

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
        absDx > absDy
          ? dx < 0
            ? actionMove.left()
            : actionMove.right()
          : dy < 0
          ? actionMove.up()
          : actionMove.down();
      }
    }
  };

  const handleKey = (e: KeyboardEvent) => {
    const modifiers = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
    const mapped = keyCodeMap[e.which];
    if (!modifiers) {
      if (mapped !== undefined) {
        e.preventDefault();
        console.log(mapped);
        actionMove[mapped]();
      }
    }
  };

  const listenKey = () => {
    window.document.addEventListener('keydown', handleKey);
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
  }, []);
}
