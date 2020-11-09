import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Desk2 from '../routerTest/Desk2';
import Desk3 from '../routerTest/Desk3';

import DeskContainer from './DeskContainer';


const Desks = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/">
          <DeskContainer/>
        </Route>
        <Route path="/Desk2">
          <Desk2 />
        </Route>
        <Route path="/Desk3">
          <Desk3 />
        </Route>
      </Switch>
    </React.Fragment>
  )
}

export default Desks;