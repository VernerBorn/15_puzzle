import React from 'react'

interface PropsTiles {
  number: number,
  index: number
}

const Tiles: React.FC<PropsTiles> = ({ number, index }): JSX.Element => (
  number === 0 ?
    <div className='tiles tiles--none'></div>
    : <div className='tiles'>{number}</div>
)

export default Tiles