import React from 'react'
import Tiles from '../Tiles/Tiles'
import shuffle from '../../../helpers/shuffleArrayNumber'

const arrayTiles = [1, 2, 3, 4, 5, 6, 7, 8, 0]
const arrayTilesShuffle = shuffle(arrayTiles)

const Board: React.FC = (): JSX.Element => {
  const renderTiles: JSX.Element[] = arrayTilesShuffle.map((number, i) => <Tiles number={number} index={i} />)
  return <div className='board' >{renderTiles}</div>
}
export default Board