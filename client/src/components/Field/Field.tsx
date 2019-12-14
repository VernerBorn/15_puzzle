import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { AppContext } from '../App/AppContext';

import Tiles from '../Tiles/Tiles';
import useKeySwipeMove from './useKeySwipeMove';

interface actionMove {
  [key: string]: () => void;
}

const Field = observer(function() {
  const { store } = React.useContext(AppContext);
  const { currentArray, moveLeft, moveUP, moveRight, moveDown } = store;

  const actionMove: actionMove = {
    left: moveLeft,
    up: moveUP,
    right: moveRight,
    down: moveDown
  };

  useKeySwipeMove(actionMove);

  useEffect(() => {
    store.getArrayTiles();
  }, [store.getSizeBoard]);

  const renderTiles: JSX.Element[] = currentArray.map((number: number, i: number) => (
    <Tiles number={number} index={i} />
  ));

  return <div className="field">{renderTiles}</div>;
});
export default Field;
