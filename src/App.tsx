import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Desks from './Componets/Desk';
import Desk2 from './routerTest/Desk2';
import Desk3 from './routerTest/Desk3';



function App() {
  return (
    <Router>
      <div className="page-container">
        <Switch>
          <Route exact path="/">
            <Desks />
          </Route>
          <Route path="/desk2">
            <Desk2 />
          </Route>
          <Route path="/desk3">
            <Desk3 />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
