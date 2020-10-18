import React from 'react';
import './App.scss';
import Header from './Componets/Header';
import DeskContainer from './Componets/DeskContainer';

function App() {
  return (
    <div className="page-container">
      <Header/>
      <DeskContainer/>
    </div>
  );
}

export default App;
