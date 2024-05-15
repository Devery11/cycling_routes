import React, {useState} from 'react';
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/Main/Main";
import {Menu} from "./Components/Menu/Menu";

function App() {
  return (
    <>
      <Header />
      <Menu />
      <Main />
    </>
  );
}

export default App;
