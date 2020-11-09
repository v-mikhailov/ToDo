import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Desk from './Componets/Desk';
import Desk2 from './routerTest/Desk2';
import Desk3 from './routerTest/Desk3';



function App() {
  return (
    <Router>
      <div className="page-container">
        <Switch>
          <Route exact path="/">
            <Desk />
          </Route>
          <Route path="/desk2">
            <Desk deskId={2} />
          </Route>
          <Route path="/desk3">
            <Desk deskId={3}/>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
