import React from 'react';
import { AppContext, stores } from './AppContext';

import Header from '../Header/Header';
import SelectionSize from '../SelectionSize/SelectionSize';
import Field from '../Field/Field';

const App = () => (
  <AppContext.Provider value={stores}>
    <Header />
    <main className="main">
      <section className="wrapped--info-panel">
        <SelectionSize />
      </section>
      <Field />
    </main>
  </AppContext.Provider>
);

export default App;
