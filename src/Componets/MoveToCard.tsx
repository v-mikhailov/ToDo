import React from 'react';
import { useDispatch } from 'react-redux';
import { ListItem, ListItemText, makeStyles } from '@material-ui/core';

import  { ColumnInterface } from '../Interfaces/interfaces';
import { changeTaskColumn } from '../Redux/acion';

interface MoveToCardPros  {
  currentColumn: ColumnInterface,
  currentTaskId: number,
}

const useStyles = makeStyles(() => ({
  listItem: {
    backgroundColor: '#f6f6f7',
    paddingLeft: '10px',
    marginBottom: '8px'
  }
}))

const MoveToCard: React.FC<MoveToCardPros> = ({currentColumn, currentTaskId}) => {
  const dispatch = useDispatch();
  const handleMoveCardClick = () => {
    dispatch(changeTaskColumn(currentColumn.id, currentTaskId))
  }
  const styles = useStyles();
  return (
    <ListItem 
      className={styles.listItem}
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