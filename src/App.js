import React from 'react';
import './App.css';
import Menu from './components/Menu'
import Resultadobusca from './utils';

function App(props) {
  return (
    <div className="App">
      <Menu/>
      <div>{props.children}</div>
    </div>
  );
}

export default App;
