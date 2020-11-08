import React from 'react';
import { connect } from 'react-redux';
import { Accordion, AccordionDetails, AccordionSummary, makeStyles, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField/TextField';

import { ColumnInterface } from '../Interfaces/interfaces';
import { createColumn } from '../Redux/acion';

const useStyles = makeStyles((theme) => ({
  newColumnForm: {
    width: '272px',
  },
  input: {
    width: '100%'
  }
}));

interface NewColumnFormProps {
  prevColumns: ColumnInterface[],
  createColumn: (column: ColumnInterface) => object
}

const NewColumnForm : React.FC<NewColumnFormProps> = ({prevColumns, createColumn}) => {
  const styles = useStyles();
  const [inputValue, setInputValue] = React.useState('')
  const [formIsExpanded, setFormIsExpanded] = React.useState(false);

  const handleAccordionClick = (): void => {
    setFormIsExpanded(!formIsExpanded);
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  }

  const calcNextColumnId = (columns: ColumnInterface[]): number => {
    const lastColumn = columns[columns.length - 1];
    let lastColumnId = lastColumn.id
    return ++lastColumnId
  }

  const handeButtonClick = (): void => {
    if (inputValue !== '') {
      const newColumn = {
        title: inputValue.trim(),
        id: calcNextColumnId(prevColumns)
      }
      createColumn(newColumn);
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
          className={styles.input}/>
      </AccordionSummary>
      <AccordionDetails>
      <Button 
        onClick={handeButtonClick}
        variant="contained" 
        color="secondary">
        Add column
      </Button>
      </AccordionDetails>
    </Accordion>
  )
}

const mapDispatchToProps = {
  createColumn
}

export default connect(null, mapDispatchToProps)(NewColumnForm);