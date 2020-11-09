import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Header from './Componets/Header';
import Desks from './Componets/Desks';



function App() {
  return (
    <Router>
      <div className="page-container">
        {/* Смена названий в разных досках! */}
        <Header/>
        <Desks />
      </div>
    </Router>
  );
}

export default App;
