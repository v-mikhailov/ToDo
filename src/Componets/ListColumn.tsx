import React from 'react';
import { Paper, Typography, makeStyles, Box } from '@material-ui/core';

import NewTaskForm from './NewTaskForm';
import Task from './Task'
import { TaskInterface, ColumnInterface } from '../Interfaces/interfaces';


const useStyles = makeStyles((theme) => ({
  desk: {
    width: '272px',
    minHeight: '64px',
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: '#f5f5f5',
  },
  taskList: {
    listStyleType: 'none',
    margin: 0,
    paddingTop: '10px',
    paddingLeft: 0,
    paddingRight: 0
  },
  cardTitle: {
    textAlign: 'center'
  }
}));

interface ListColumnProps {
  columnData: ColumnInterface,
  tasks: TaskInterface[]
} 

const ListColumn : React.FC<ListColumnProps> = ({columnData, tasks}) => {
  const styles = useStyles();

  return (
    <Box>
      <Paper variant="outlined" square className={styles.desk}>
        <Typography variant="h6" className={styles.cardTitle}>
          {columnData.title}
        </Typography>
        { tasks.length === 0 ? (
            <p className="subtitle">Заданий нет!</p>
          ) : (
            <ul className={styles.taskList}>
            {
              tasks.map((task: TaskInterface) => {
                return (
                  <Task 
                    data={task}
                    key={task.id}
                  />
                ) 
              })
            }
          </ul>
          )
        }
      </Paper>
      <NewTaskForm type={columnData.type}/>
    </Box>
  )
}

export default ListColumn;