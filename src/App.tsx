import React from 'react';
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import Desk from './Componets/Desk';
import { DeskInterface } from './Interfaces/interfaces';
import { RootState } from './Redux/rootReducer';

const App = () => {
  const desks = useSelector((state : RootState) => state.desks.desks)
  return (
    <Router>
      <div className="page-container">
        <Switch>
          {
            desks.map((desk : DeskInterface) => {
              return (
                <Route path={`/desk/${desk.id}`} key={desk.id}>
                  <Desk deskId={desk.id}/>
                </Route>
              )
            })
          }
          <Redirect from='/' to={`/desk/${desks[0].id}`}/> 
        </Switch>
      </div>
    </Router>
  );
}


export default App;
