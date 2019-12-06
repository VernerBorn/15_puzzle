import React from "react";

import Header from "../Header/Header";
import SelectionSize from "../SelectionSize/SelectionSize";
import Board from "../Board/Board";

const App = () => (
  <>
    <Header />
    <main className='main'>
      <section className='wrapped--info-panel'>
        <SelectionSize />
      </section>
      <Board />
    </main>
  </>
);

export default App