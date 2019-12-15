import React from 'react';
import { observer } from 'mobx-react-lite';

import { AppContext } from '../App/AppContext';

import IconExchange from './IconExchange';
import IconSyncAltSolid from './IconSyncAltSolid';

interface StepInfo {
  win: boolean;
}

export default observer(function StepInfo({ win }: StepInfo) {
  const { store } = React.useContext(AppContext);
  return (
    <div className={`step-info ${win}`} onClick={() => store.getArrayTiles()}>
      <IconSyncAltSolid className={`step-info__icon--restart ${win}`} />
      <IconExchange className={`step-info__icon--step ${win}`} />
      <span className={`step-info__title ${win}`}>{store.totalStep}</span>
    </div>
  );
});
