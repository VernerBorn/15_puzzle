import React from 'react'

const SelectionSize: React.FC = (): JSX.Element => (
  <div className='selection-size'>
    <h2 className='selection-size__title'>Количество элементов</h2>
    <div className='selection-size__button--wrap'>
      <button className='selection-size__button--active'>8</button>
      <button className='selection-size__button'>15</button>
      <button className='selection-size__button'>24</button>
    </div>
  </div>
)

export default SelectionSize