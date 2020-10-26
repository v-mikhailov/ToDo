import React from 'react';
import { Accordion, AccordionSummary, Typography, makeStyles, AccordionDetails, TextField, IconButton, Divider, Switch, FormControlLabel, Button  } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles((theme) => ({
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

const TestForm = () => {
  const styles = useStyles();

  return (
    <div className="task-form__container">
      <Accordion>
        <AccordionSummary>
          <Button className={styles.formHeading}>Add new task</Button>
        </AccordionSummary>
        <Divider/>
        <AccordionDetails>
          <form 
            noValidate
          >
            <TextField
              id="standard-multiline-flexible"
              label="Enter a title for this card"
              variant="outlined"
              helperText=""
              className={styles.textInput}
            />
            <TextField
              id="standard-multiline-flexible"
              label="Add task description"
              variant="outlined"
              multiline
              rows={4}
              helperText=""
              className={styles.textInput}
            />
          </form>
        </AccordionDetails>
        <Divider />
        <AccordionDetails>
          <form noValidate>
            <TextField
              label="Set deadline"
              type="datetime-local"
              defaultValue="2017-05-24T10:30"
              className={styles.textInput}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <FormControlLabel
              label="Urgent task"
              control={
                <Switch
                  color="primary"
                />
              }
            />
          </form>
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
      </Accordion>
    </div>
  )
}

export default TestForm;