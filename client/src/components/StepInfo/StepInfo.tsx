import React from 'react';
import { observer } from 'mobx-react-lite';

import { AppContext } from '../App/AppContext';

import IconExchangeAlt from './IconExchangeAlt';

export default observer(function StepInfo() {
  const { store } = React.useContext(AppContext);
  return (
    <div className="step-info">
      <IconExchangeAlt className="step-info__icon" />
      <span className="step-info__title">{store.stepAll}</span>
    </div>
  );
});
