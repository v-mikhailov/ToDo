import React from 'react';
import { useDispatch } from 'react-redux';
import { FormControl, Accordion, AccordionSummary, makeStyles, AccordionDetails, TextField, Divider, Switch, FormControlLabel, Button, Paper, OutlinedInput, InputLabel } from '@material-ui/core';
import { createTask } from '../Redux/acion';
import { TaskInterface } from '../Interfaces/interfaces';


interface NewTaskFormProps {
  columnId: number,
  deskId: number
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
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  formBlock: {
    marginBottom: "10px",
  },
  bottomSpacing: {
    marginBottom: theme.spacing(1)
  }
}));

const NewTaskForm: React.FC<NewTaskFormProps> = ({columnId, deskId }) => {
  const disptach = useDispatch();
  const styles = useStyles();
  const [formIsExpanded, setFormIsExpanded] = React.useState(false);
  const [titleInputValue, setTitleInputValue] = React.useState('');
  const [descrInputValue, setDescrInputValue] = React.useState('');
  const [deadline, setDeadline] = React.useState('');
  const [isUrgent, setIsUrgent] = React.useState(false);

  const handleFormClick = (event: React.MouseEvent<HTMLElement>): void => {
      setFormIsExpanded(!formIsExpanded);
  }

  const handleTitleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void  => {
    setTitleInputValue(event.target.value);
  }

  const handleDescrInputChange = (event: React.ChangeEvent<HTMLInputElement>): void  => {
    setDescrInputValue(event.target.value);
  }

  const handleSwitchClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setIsUrgent(!isUrgent);
  }
  
  const handleDateChange = (event: any): void => {
    setDeadline(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (titleInputValue !== '') {
      const newTask: TaskInterface = {
          title: titleInputValue,
          descr: descrInputValue,
          deadline: deadline,
          isUrgent: isUrgent,
          id: Date.now(),
          columnId: columnId,
          deskId: deskId
      }

      setTitleInputValue('');
      setDescrInputValue('');
      setDeadline('');
      setIsUrgent(false);
      setFormIsExpanded(false);
      disptach(createTask(newTask));
    } 
  }

  return(
    <Paper className={styles.form} square>
      <Accordion 
        className={styles.formBackground}
        expanded={formIsExpanded}
      >
        <AccordionSummary onClick={handleFormClick}>
          <Button className={styles.formHeading}>Add new task</Button>
        </AccordionSummary>
        <Divider/>
        <AccordionDetails >
          <form 
            onSubmit={handleSubmit}
            noValidate
            className={styles.formContainer}
          >
            <FormControl
              required={true}
              variant="outlined"
            >
            <InputLabel>Enter a title for this card</InputLabel>
            <OutlinedInput 
              multiline={true}
              fullWidth={true}
              onChange={handleTitleInputChange}
              value={titleInputValue}
              className={styles.formBlock}
            />
            </FormControl>
            <TextField
              label="Add task description"
              variant="outlined"
              multiline
              rows={4}
              onChange={handleDescrInputChange}
              value={descrInputValue}
              className={styles.formBlock}
              fullWidth={true}
            />
            <TextField
              label="Set deadline"
              type="date"
              value={deadline}
              onChange={handleDateChange}
              className={styles.formBlock}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <FormControlLabel
              label="Urgent task"
              control={
                <Switch
                  color="primary"
                  checked={isUrgent}
                  onClick={handleSwitchClick}
                />
              }
              className={styles.formBlock}
            />
            <Button 
              variant="contained" 
              color="secondary" 
              type="submit"
            >
              Add task to the list
            </Button>
          </form>
        </AccordionDetails>
      </Accordion>
    </Paper>
  )
}

export default NewTaskForm;