import React from 'react';
import { connect } from 'react-redux';

import { Accordion, AccordionSummary, Typography, makeStyles, AccordionDetails, TextField, IconButton, Divider, Switch, FormControlLabel, Button, Paper } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import { createTask } from '../Redux/acion';
import { TaskInterface } from '../Interfaces/interfaces';


  interface NewTaskFormProps {
    createTask: (task: any) => object,
    type: string
  }

const useStyles = makeStyles((theme) => ({
  form: {
    width: '272px'
  },
  formBackground: {
    backgroundColor: '#f5f5f5'
  },
  formHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  textInput: {
    width: "200px"
  }
}));

const NewTaskForm: React.FC<NewTaskFormProps> = ({createTask, type}) => {
  const styles = useStyles();
  const [titleInputValue, setTitleInputValue] = React.useState('');
  const [descrInputValue, setDescrInputValue] = React.useState('');
  const [deadline, setDeadline] = React.useState('01.10.21');
  const [isUrgent, setIsUrgent] = React.useState(false);

  // Как сделать один общий метод для всех событий?
  const handleTitleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void  => {
    setTitleInputValue(event.target.value);
  }

  const handleDescrInputChange = (event: React.ChangeEvent<HTMLInputElement>): void  => {
    setDescrInputValue(event.target.value);
  }

  const handleSwitchClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setIsUrgent(!isUrgent);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (titleInputValue !== '') {
      const newTask: TaskInterface = {
          title: titleInputValue,
          descr: descrInputValue,
          deadline: deadline,
          isUrgent: isUrgent,
          type: type,
          id: Date.now()
      }
      console.log('newTask', newTask);
      // createTask(newTask);
    } 

  }

  return(
    <Paper className={styles.form} square>
      <Accordion className={styles.formBackground}>
        <AccordionSummary>
          <Button className={styles.formHeading}>Add new task</Button>
        </AccordionSummary>
        <Divider/>
        <form 
          noValidate 
          onSubmit={handleSubmit}
        >
          <AccordionDetails>
              <TextField
                id="standard-multiline-flexible"
                label="Enter a title for this card"
                variant="outlined"
                helperText=""
                onChange={handleTitleInputChange}
                value={titleInputValue}
                className={styles.textInput}
              />
              <TextField
                id="standard-multiline-flexible"
                label="Add task description"
                variant="outlined"
                multiline
                rows={4}
                helperText=""
                onChange={handleDescrInputChange}
                value={descrInputValue}
                className={styles.textInput}
              />
          </AccordionDetails>
          <Divider />
          <AccordionDetails>
            <FormControlLabel
              label="Urgent task"
              control={
                <Switch
                  color="primary"
                  checked={isUrgent}
                  onClick={handleSwitchClick}
                />
              }
            />
          </AccordionDetails>
          <Divider />
          <AccordionDetails>
            <Button 
              variant="contained" 
              color="secondary" 
              type="submit"
            >
              Add a task to the list
            </Button>
          </AccordionDetails>
        </form>
      </Accordion>
    </Paper>


    // <Paper className={styles.test} square>
    //   <form noValidate id="addTaskFrom" onSubmit={handleSubmit}>
    //     <ListItem>
    //       <TextField
    //         id="standard-multiline-flexible"
    //         className={styles.textInput}
    //         placeholder="Add new task"
    //         onChange={handleChange}
    //         value={inputValue}
    //         helperText=""
    //       />
    //       <IconButton type="submit">
    //         <AddIcon />
    //       </IconButton>
    //     </ListItem>
    //   </form>
    // </Paper>
  )
}

const mapDispatchToProps = {
  createTask
}

export default connect(null, mapDispatchToProps)(NewTaskForm);