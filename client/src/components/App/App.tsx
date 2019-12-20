import React from 'react';
import { AppContext, stores } from './AppContext';

import Header from '../Header/Header';
import SelectionSize from '../SelectionSize/SelectionSize';
import Field from '../Field/Field';
import Dashboard from '../Dashboard/Dashboard';

const App = () => (
  <AppContext.Provider value={stores}>
    <Header/>
    <main className='main'>
      <Dashboard/>
      <Field/>
    </main>
  </AppContext.Provider>
);

export default App;
