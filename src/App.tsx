import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import Desk from './Componets/Desk';
import { DeskInterface } from './Interfaces/interfaces';

interface AppProps {
  desks: DeskInterface[]
}

const App : React.FC<AppProps> = ({desks}) => {
  return (
    <Router>
      <div className="page-container">
        <Switch>
          {
            desks.map((desk : DeskInterface) => {
              return (
                <Route path={`/desk/${desk.id}`}>
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

const mapStateToProps = (state: any) => {
  return {
    desks: state.desks.desks
  }
}

export default connect(mapStateToProps)(App);
