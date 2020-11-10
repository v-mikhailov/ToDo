import React from 'react';
import { connect } from 'react-redux';
import { Accordion, AccordionDetails, AccordionSummary, makeStyles, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField/TextField';

import { ColumnInterface } from '../Interfaces/interfaces';
import { createColumn } from '../Redux/acion';


interface NewColumnFormProps {
  columns: ColumnInterface[],
  deskId: number,
  createColumn: (column: ColumnInterface) => object
}

const useStyles = makeStyles((theme) => ({
  newColumnForm: {
    width: '272px',
  },
  input: {
    width: '100%'
  }
}));

const NewColumnForm : React.FC<NewColumnFormProps> = ({columns, deskId, createColumn}) => {
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

const mapStateToProps = (state: any) => {
  return {
    columns: state.columns.columns
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewColumnForm);