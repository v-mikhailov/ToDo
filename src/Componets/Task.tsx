import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton, ListItem, ListItemSecondaryAction, ListItemText, makeStyles } from '@material-ui/core';
import { TaskInterface } from './interfaces';

const useStyles = makeStyles((theme) => ({
  listItem: {
    backgroundColor: 'white',
    marginBottom: theme.spacing(2)
  }
}));

interface TaskProps {
  data: TaskInterface,
  onRemove: (id: number) => void
}

const Task: React.FC<TaskProps> = ({data, onRemove}) => {
  const styles = useStyles();

  return(
    <ListItem className={styles.listItem}>
      <ListItemText
        primary={data.text}
      />
      <ListItemSecondaryAction>
        <IconButton 
          edge="end" 
          aria-label="delete"
          onClick={()=> onRemove(data.id)}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default Task;