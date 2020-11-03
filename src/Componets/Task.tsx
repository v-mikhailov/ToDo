import React from 'react';
import { connect } from 'react-redux'
import { makeStyles, ListItem, ListItemText } from '@material-ui/core';

import { TaskInterface } from '../Interfaces/interfaces';
import { openTask  } from '../Redux/acion';

interface TaskProps {
  openTask: (task: TaskInterface) => object,
  data: TaskInterface,
}

const useStyles = makeStyles((theme) => ({
  listItem: {
    backgroundColor: 'white',
    marginBottom: '10px'
  }
}));

const Task: React.FC<TaskProps> = ({ openTask, data}) => {
  const styles = useStyles();

  const handleTaskClick = (event: React.MouseEvent) => {
    openTask(data);
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

const mapDispatchToProps = {
    openTask
}

export default connect(null, mapDispatchToProps)(Task);