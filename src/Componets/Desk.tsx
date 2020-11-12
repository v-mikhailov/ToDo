import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import DeskContainer from './DeskContainer';
import { DeskInterface } from '../Interfaces/interfaces';
import { RootState } from '../Redux/rootReducer';

interface DeskProps {
  deskId?: number
}

const Desk : React.FC<DeskProps> = ({ deskId = 1 }) => {
  const desks = useSelector((state: RootState) => state.desks.desks)

  const findTitle = (desks: DeskInterface[]) => {
    const currentDesk = desks.find((desk: DeskInterface) =>(desk.id === deskId));
    return currentDesk!.title
  }

  return (
    <React.Fragment>
      <Header 
        deskName={findTitle(desks)}
        deskId={deskId}
      />
      <DeskContainer deskId={deskId} />
    </React.Fragment>
  )
}


export default Desk;