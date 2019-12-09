import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite';
import { AppContext } from '../../AppContext';

import Tiles from '../Tiles/Tiles';

const Board = observer(function () {
  const { store } = React.useContext(AppContext);
  useEffect(() => {
    store.getArrayTiles()
  }, [store.getSizeBoard]);
  const renderTiles: JSX.Element[] = store
    .currentArray.map((number: number, i: number) => <Tiles number={number} index={i} />)
  return <div className='board' >{renderTiles}</div>
})
export default Board
