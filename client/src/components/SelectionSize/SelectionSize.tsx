import React from 'react';
import { observer } from 'mobx-react-lite';
import { AppContext } from '../App/AppContext';

const SelectionSize = observer(function() {
  const { store } = React.useContext(AppContext);

  const mapSize: string[] = ['8', '15', '24'];

  const handleChangeForm = (e: React.FormEvent<HTMLFormElement>) => {
    const value = Number((e.target as HTMLInputElement).value);
    store.getSizeBoard(value);
  };

  const renderInputSize: JSX.Element[] = mapSize.map(size => (
    <>
      <input
        type="radio"
        id={size}
        name="selection-size"
        value={size}
        className="selection-size__input"
        defaultChecked={size === String(store.sizeField - 1) ? true : false}
      ></input>
      <label htmlFor={size}>{size}</label>
    </>
  ));

  return (
    <div className="selection-size">
      <h2 className="selection-size__title">Количество элементов</h2>
      <form className="selection-size__button--wrap" onChange={e => handleChangeForm(e)}>
        {renderInputSize}
      </form>
    </div>
  );
});
export default SelectionSize;
