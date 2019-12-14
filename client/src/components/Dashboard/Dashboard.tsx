import React from 'react';
import { observer } from 'mobx-react-lite';

import { AppContext } from '../App/AppContext';

import SelectionSize from '../SelectionSize/SelectionSize';
import StepInfo from '../StepInfo/StepInfo';
import TimeInfo from '../TimeInfo/TimeInfo';
import IconSyncAltSolid from '../StepInfo/IconSyncAltSolid';

export default observer(function Dashboard() {
  const { store } = React.useContext(AppContext);
  return (
    <section className="dashboard">
      {store.isFinishGame ? (
        <>
          <div className="info" onClick={() => store.getArrayTiles()}>
            <span className="info__title--win">Вы собрали за</span>
            <div className="info__wrap--win">
              <StepInfo win={store.isFinishGame} />
              <TimeInfo win={store.isFinishGame} />
            </div>
            <IconSyncAltSolid className="info__icon--win" />
          </div>
        </>
      ) : (
        <>
          <SelectionSize />
          <div className="info__wrap">
            <StepInfo win={store.isFinishGame} />
            <TimeInfo win={store.isFinishGame} />
          </div>
        </>
      )}
    </section>
  );
});
