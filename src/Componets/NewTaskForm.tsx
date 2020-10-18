import React from 'react';
import { TextField, ListItem, IconButton, makeStyles, Paper } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

interface NewTaskFormProps {
  onHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onHandleSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
  inputValue: string
}

const useStyles = makeStyles((theme) => ({
  textInput: {
    marginRight: theme.spacing(1)
  },
  test: {
    width: '272px',
    backgroundColor: '#f5f5f5',
  }
}));

const NewTaskForm: React.FC<NewTaskFormProps> = props => {
  const styles = useStyles();

  return(
    <Paper className={styles.test} square>
      <form noValidate id="addTaskFrom" onSubmit={props.onHandleSubmit}>
        <ListItem>
          <TextField
            id="standard-multiline-flexible"
            className={styles.textInput}
            placeholder="Add new task"
            onChange={props.onHandleChange}
            value={props.inputValue}
            helperText=""
          />
          <IconButton type="submit">
            <AddIcon />
          </IconButton>
        </ListItem>
      </form>
    </Paper>
  )
}

export default NewTaskForm;