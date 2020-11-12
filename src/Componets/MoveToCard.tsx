import React from 'react';
import { useDispatch } from 'react-redux';
import { ListItem, ListItemText } from '@material-ui/core';

import  { ColumnInterface } from '../Interfaces/interfaces';
import { changeTaskColumn } from '../Redux/acion';

interface MoveToCardPros  {
  currentColumn: ColumnInterface,
  currentTaskId: number,
}

const MoveToCard: React.FC<MoveToCardPros> = ({currentColumn, currentTaskId}) => {
  const dispatch = useDispatch();

  const handleMoveCardClick = () => {
    dispatch(changeTaskColumn(currentColumn.id, currentTaskId))
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

export default MoveToCard;