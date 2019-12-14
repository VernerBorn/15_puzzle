import React from 'react';

import SelectionSize from '../SelectionSize/SelectionSize';
import StepInfo from '../StepInfo/StepInfo';
import TimeInfo from '../TimeInfo/TimeInfo';

export default function Dashboard() {
  return (
    <section className="dashboard">
      <SelectionSize />
      <div className="info-wrap">
        <StepInfo />
        <TimeInfo />
      </div>
    </section>
  );
}
