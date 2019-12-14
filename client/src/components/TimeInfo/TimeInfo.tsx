import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { AppContext } from '../App/AppContext';

import IconClock from './IconClock';

export default observer(function TimeInfo() {
  const { store } = React.useContext(AppContext);

  let timerID: NodeJS.Timeout;

  const setTimer = (pause: boolean) => {
    if (!pause) {
      timerID = setInterval(() => {
        store.setTimer();
      }, 1000);
    } else {
      clearInterval(timerID);
    }
  };

  useEffect(() => {
    console.log(store.pause);
    setTimer(store.pause);
    return () => clearInterval(timerID);
  }, [store.pause]);

  return (
    <div className="time-info" onClick={() => store.stopTimer()}>
      <IconClock className="time-info__icon" />
      <span className="time-info__title">{store.timer}</span>
    </div>
  );
});
