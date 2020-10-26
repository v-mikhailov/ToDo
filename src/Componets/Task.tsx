import React from 'react';
import { connect } from 'react-redux'
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton, ListItem, ListItemSecondaryAction, ListItemText, makeStyles } from '@material-ui/core';
import { TaskInterface } from '../Interfaces/interfaces';
import { deleteTask } from '../Redux/acion';
import { DockSharp } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  listItem: {
    backgroundColor: 'white',
    marginBottom: theme.spacing(2)
  }
}));

interface TaskProps {
  deleteTask: (task: any) => object
  data: TaskInterface,
}

const Task: React.FC<TaskProps> = ({deleteTask, data}) => {
  const styles = useStyles();

  const handleDelete = (event: React.MouseEvent) => {
     deleteTask(data);
  }

  return(
    <ListItem className={styles.listItem}>
      <ListItemText
        primary={data.title}
      />
      <ListItemSecondaryAction>
        <IconButton 
          edge="end" 
          aria-label="delete"
          onClick={handleDelete}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

const mapDispatchToProps = (dispatch: any) => ({
    deleteTask: (task: any) => dispatch(deleteTask(task))
  })


export default connect(null, mapDispatchToProps)(Task);