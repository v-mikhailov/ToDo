import React from 'react';
import Header from './Header';
import DeskContainer from './DeskContainer';
import Footer from './Footer';

interface DeskProps {
  deskId?: number,
  deskName?: string
}

const Desk : React.FC<DeskProps> = ({ deskId = 1, deskName = 'Desk 1' }) => {
  return (
    <React.Fragment>
      <Header 
        deskName={deskName}
        deskId={deskId}
      />
      <DeskContainer deskId={deskId} />
      <Footer />
    </React.Fragment>
  )
}

export default Desk;