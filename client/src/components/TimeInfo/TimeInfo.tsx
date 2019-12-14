import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { AppContext } from '../App/AppContext';

import IconClock from './IconClock';
import IconPauseSolid from './IconPauseSolid';

interface TimeInfo {
  win: boolean;
}

export default observer(function TimeInfo({ win }: TimeInfo) {
  const { store } = React.useContext(AppContext);

  let timerID: NodeJS.Timeout;

  const setTimer = (pause: boolean) => {
    if (!pause) {
      timerID = setInterval(() => {
        store.addSecond();
      }, 1000);
    } else {
      clearInterval(timerID);
    }
  };

  useEffect(() => {
    setTimer(store.isPause);
    return () => clearInterval(timerID);
  }, [store.isPause]);

  return (
    <div className={`time-info ${win}`} onClick={() => store.stopTimer()}>
      <IconPauseSolid className={`time-info__icon--pause ${win}`} />
      <IconClock className={`time-info__icon--time ${win}`} />
      <span className={`time-info__title ${win}`}>{store.secTransform}</span>
    </div>
  );
});
