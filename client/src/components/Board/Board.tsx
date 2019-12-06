import React from 'react'
import Tiles from '../Tiles/Tiles'

const arrayTiles = [1, 2, 3, 4, 5, 6, 7, 8, 0]

const Board: React.FC = (): JSX.Element => {
  const renderTiles: JSX.Element[] = arrayTiles.map(number => <Tiles number={number} />)
  return <div className='board' >{renderTiles}</div>
}

export default Board