import React from 'react'
import { observer } from 'mobx-react-lite';
import { AppContext } from '../../AppContext';

const SelectionSize = observer(function () {
  const { store } = React.useContext(AppContext);
  const handleChangeForm = (e: React.FormEvent<HTMLFormElement>) => {
    const value = Number((e.target as HTMLInputElement).value)
    store.getSizeBoard(value)
    store.getArrayTiles()
  }
  return (
    <div className='selection-size'>
      <h2 className='selection-size__title'>Количество элементов</h2>
      <form className='selection-size__button--wrap'
        onChange={e => handleChangeForm(e)}>
        <input type="radio" id="8"
          name="selection-size" value="8"
          className='selection-size__input'>
        </input>
        <label htmlFor="8">8</label>
        <input type="radio" id="15"
          name="selection-size" value="15"
          className='selection-size__input' defaultChecked>
        </input>
        <label htmlFor="15" >15</label>
        <input type="radio" id="24"
          name="selection-size" value="24"
          className='selection-size__input'>
        </input>
        <label htmlFor="24">24</label>
      </form>
    </div>
  )
})
export default SelectionSize