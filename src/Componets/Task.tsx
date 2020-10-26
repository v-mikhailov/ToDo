import React from 'react';
import { connect } from 'react-redux'
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { IconButton, makeStyles, Accordion, AccordionSummary, Divider, AccordionDetails, Typography, Checkbox } from '@material-ui/core';

import { TaskInterface } from '../Interfaces/interfaces';
import { deleteTask, changeTaskType  } from '../Redux/acion';



const useStyles = makeStyles((theme) => ({
  listItem: {
    backgroundColor: 'white',
    marginBottom: theme.spacing(2)
  }
}));

interface TaskProps {
  deleteTask: (task: TaskInterface) => object,
  changeTaskType: (task: TaskInterface) => object,
  data: TaskInterface,
}

const Task: React.FC<TaskProps> = ({deleteTask, changeTaskType, data}) => {
  const styles = useStyles();
  const [isTaskChecked, setIsTaskChecked] = React.useState(false);
  
  const handleDelete = (event: React.MouseEvent) => {
     deleteTask(data);
  }

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsTaskChecked(!isTaskChecked);
      changeTaskType(data);
  }

  return(
      <Accordion>
        <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
        >
          <Typography>{data.title}</Typography>
        </AccordionSummary>
        <Divider/>
        <AccordionDetails>
          <Typography>{data.descr}</Typography>
        </AccordionDetails>
        <Divider/>
        {
          data.deadline && 
          ( 
            <AccordionDetails>
              <Typography>Deadline time: {data.deadline}</Typography>
            </AccordionDetails>
          )
        }
        <Divider/>
        <AccordionDetails>
          <IconButton 
            edge="end" 
            aria-label="delete"
            onClick={handleDelete}
          >
            <DeleteIcon />
          </IconButton>
          {data.type !== 'isCompleted' && (
            <Checkbox
              checked={isTaskChecked}
              onChange={handleCheckboxChange}
              inputProps={{ 'aria-label': 'primary checkbox' }}  
            />
          )}
        </AccordionDetails>
      </Accordion>
  )
}

const mapDispatchToProps = (dispatch: any) => ({
    deleteTask: (task: TaskInterface) => dispatch(deleteTask(task)),
    changeTaskType : (task: TaskInterface) => dispatch(changeTaskType(task))
  })


export default connect(null, mapDispatchToProps)(Task);