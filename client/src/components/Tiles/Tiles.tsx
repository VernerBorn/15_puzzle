import React from 'react'
import { observer } from 'mobx-react-lite';
import { AppContext } from '../App/AppContext';

interface TilesProps {
  number: number,
  index: number
}
const Tiles = observer(function ({ number, index }: TilesProps) {
  const { store } = React.useContext(AppContext);
  return (
    number === 0 ?
      <div key={index} className={`tiles tiles--${store.sizeBoard} tiles--none`}
        onClick={(e) => e.preventDefault()}></ div>
      : <div key={index} className={`tiles tiles--${store.sizeBoard}`}
        onClick={(e) => e.preventDefault()}>{number}</div>
  )
})
export default Tiles