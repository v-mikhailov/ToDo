import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import DeskContainer from './DeskContainer';
import { DeskInterface } from '../Interfaces/interfaces';

interface DeskProps {
  desks: DeskInterface[], 
}

const Desk : React.FC<DeskProps>= ({desks}) => {


  return (
    <React.Fragment>
      <Header deskName={desks[0].title}/>
      <DeskContainer />
    </React.Fragment>
  )
}

const mapStateToProps = (state: any) => {
  return {
    desks: state.desks.desks
  }
}

export default connect(mapStateToProps)(Desk);