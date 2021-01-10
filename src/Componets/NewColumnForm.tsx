import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Accordion, AccordionDetails, AccordionSummary, makeStyles, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField/TextField';

import { ColumnInterface } from '../Interfaces/interfaces';
import { createColumn } from '../Redux/acion';
import { RootState } from '../Redux/rootReducer';


interface NewColumnFormProps {
  deskId: number,
}

const useStyles = makeStyles((theme) => ({
  newColumnForm: {
    width: '272px',
  },
  input: {
    width: '100%'
  },
  button: {
    display: 'block',
    marginLeft: 'auto'
  }
}));

const NewColumnForm : React.FC<NewColumnFormProps> = ({ deskId }) => {
  const columns = useSelector((state: RootState) => state.columns.columns);
  const dispatch = useDispatch();
  const styles = useStyles();
  const [inputValue, setInputValue] = React.useState('')
  const [formIsExpanded, setFormIsExpanded] = React.useState(false);

  const handleAccordionClick = () => {
    setFormIsExpanded(!formIsExpanded);
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const calcNextColumnId = (columns: ColumnInterface[]) => {
    const lastColumn = columns[columns.length - 1];
    let lastColumnId = lastColumn.id
    return lastColumnId + 1
  }

  const handeButtonClick = () => {
    if (inputValue !== '') {
      const newColumn = {
        title: inputValue.trim(),
        id: calcNextColumnId(columns),
        deskId: deskId
      }
      dispatch(createColumn(newColumn));
      setInputValue('');
      setFormIsExpanded(false);
    }
  }

  return(
    <Accordion 
      className={styles.newColumnForm}
      expanded={formIsExpanded}
    >
      <AccordionSummary
        onClick={handleAccordionClick}
      >
        <TextField 
          label="Add another column" 
          value={inputValue}
          onChange={handleInputChange}
          className={styles.input}
        />
      </AccordionSummary>
      <AccordionDetails>
      <Button 
        onClick={handeButtonClick}
        variant="contained" 
        color="secondary"
        className={styles.button}
      >
        Add column
      </Button>
      </AccordionDetails>
    </Accordion>
  )
}

export default NewColumnForm;