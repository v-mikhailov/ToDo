import React from 'react';
import { connect } from 'react-redux';
import { ListItem, ListItemText } from '@material-ui/core';

import  { ColumnInterface } from '../Interfaces/interfaces';
import { changeTaskColumn } from '../Redux/acion';

interface MoveToCardPros  {
  currentColumn: ColumnInterface,
  currentTaskId: number,
  changeTaskColumn: (columnId: number, taskId: number) => object
}

const MoveToCard: React.FC<MoveToCardPros> = ({currentColumn, currentTaskId, changeTaskColumn}) => {

  const handleMoveCardClick = () => {
    changeTaskColumn(currentColumn.id, currentTaskId)
  }

  return (
    <ListItem 
      className="list-item" 
      disableGutters={true} 
      key={currentColumn.id}
      onClick={handleMoveCardClick}
    >
      <ListItemText
        primary={currentColumn.title}
      />
    </ListItem>
  )
}

const mapDispatchToProps = {
  changeTaskColumn
}

export default connect(null, mapDispatchToProps)(MoveToCard);