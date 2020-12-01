import React from 'react';
import { useDispatch } from 'react-redux'
import { makeStyles, ListItem, ListItemText } from '@material-ui/core';
import { TaskInterface } from '../Interfaces/interfaces';
import { openTask  } from '../Redux/acion';

interface TaskProps {
  data: TaskInterface,
}

const useStyles = makeStyles((theme) => ({
  listItem: {
    backgroundColor: 'white',
    marginBottom: '10px'
  }
}));

const Task: React.FC<TaskProps> = ({ data }) => {
  const dispatch = useDispatch();
  const styles = useStyles();

  const handleTaskClick = (event: React.MouseEvent) => {
    dispatch(openTask(data));
  }

  return(
    <ListItem 
      className={styles.listItem} 
      divider={true}
      onClick={handleTaskClick}
    >
      <ListItemText primary={data.title} />
    </ListItem>
  )
}

export default Task;