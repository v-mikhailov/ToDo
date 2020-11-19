import React from 'react';
import { Paper, Typography, makeStyles, Box } from '@material-ui/core';
import { connect, useSelector } from 'react-redux';
import NewTaskForm from './NewTaskForm';
import Task from './Task'
import { TaskInterface, ColumnInterface } from '../Interfaces/interfaces';
import { RootState } from '../Redux/rootReducer';

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
  deskId: number
} 

const ListColumn: React.FC<ListColumnProps> = ({deskId}) => {
  // Что означает ошибка TS при использованиии useSelector?
  const columns = useSelector((state: RootState) => state.columns.columns);
  const newTasks = useSelector((state: RootState) => state.tasks.tasks)
  const styles = useStyles();

  const filteredColumns = columns.filter((column: ColumnInterface) => (column.deskId === deskId || column.deskId === 0));
  const filterTasks = (tasks: TaskInterface[], columnId: number) => tasks.filter((task: TaskInterface) => (task.columnId === columnId && task.deskId === deskId));

  return (
    filteredColumns.map((column: ColumnInterface) => {
      const tasks = filterTasks(newTasks, column.id);
        return(
          <Box>
            <Paper variant="outlined" square className={styles.desk}>
              <Typography variant="h6" className={styles.cardTitle}>
                {column.title}
              </Typography>
              { 
                tasks.length === 0 ? (
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
            <NewTaskForm columnId={column.id} deskId={deskId}/>  
          </Box>
        )
    })
  )
}

const mapStateToProps = (state: any) => {
  return {
    columns: state.columns.columns
  }
} 

export default connect(mapStateToProps)(ListColumn);