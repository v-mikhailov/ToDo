import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import DeskContainer from './DeskContainer';
import { DeskInterface } from '../Interfaces/interfaces';

interface DeskProps {
  desks: DeskInterface[], 
  deskId?: number
}

const Desk : React.FC<DeskProps>= ({desks, deskId = 1}) => {

  const findTitle = (desks: any) => {
    const currentDesk = desks.find((desk: DeskInterface) =>(desk.id === deskId));
    return currentDesk.title
  }

  return (
    <React.Fragment>
      <Header 
        deskName={findTitle(desks)}
        deskId={deskId}
        />
      <DeskContainer 
        deskId={deskId}
      />
    </React.Fragment>
  )
}

const mapStateToProps = (state: any) => {
  return {
    desks: state.desks.desks
  }
}

export default connect(mapStateToProps)(Desk);