import React from 'react';

import { Paper, Typography, makeStyles, Box } from '@material-ui/core';
import NewTaskForm from './NewTaskForm';
import Task from './Task'
import { TaskInterface, ColumnInterface } from './interfaces';


const useStyles = makeStyles((theme) => ({
  desk: {
    width: '272px',
    minHeight: '64px',
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: '#f5f5f5',
  },
  cardTitle: {
    textAlign: 'center'
  }
}));

interface ListColumnProps {
  data: ColumnInterface
} 

const ListColumn : React.FC<ListColumnProps> = ({data}) => {
  const styles = useStyles();
  const [inputValue, setInputValue] = React.useState('');
  const [tasks, setTasks] = React.useState<TaskInterface[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void  => {
    setInputValue(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void  => {
    event.preventDefault();
    if (inputValue !== '') {
      const newTask: TaskInterface = {
        text: inputValue,
        isComplite: false,
        id: Date.now()
      }
      setTasks(prev => [newTask, ...prev])
      setInputValue('');
    }
  }

  const removeHandler = (id: number) => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }
  return (
    <Box>
      <Paper variant="outlined" square className={styles.desk}>
        <Typography variant="h6" className={styles.cardTitle}>
          {data.title}
        </Typography>
        { tasks.length === 0 ? (
            <p className="subtitle">Заданий нет!</p>
          ) : (
            <ul className='task-list'>
            {
              tasks.map(task => {
                return (
                  <Task 
                    data={task}
                    onRemove={removeHandler}
                    key={task.id}
                  />
                ) 
              })
            }
          </ul>
          )
        }
      </Paper>
      <NewTaskForm 
        onHandleChange={handleChange}
        onHandleSubmit={handleSubmit}
        inputValue={inputValue}
      />
    </Box>
  )
}

export default ListColumn;
