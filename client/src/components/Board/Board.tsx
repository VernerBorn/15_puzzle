import React from 'react'
import Tiles from '../Tiles/Tiles'

const arrayTiles = [1, 2, 3, 4, 5, 6, 7, 8, 0].sort(function(){
  return Math.random() - 0.5;
});

// const arrayTiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0]

const Board: React.FC = (): JSX.Element => {
  const renderTiles: JSX.Element[] = arrayTiles.map((number, i) => <Tiles number={number} index={i} />)
  return <div className='board' >{renderTiles}</div>
}

export default Board