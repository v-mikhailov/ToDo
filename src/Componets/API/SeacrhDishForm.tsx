import React from 'react';
import { Button, makeStyles, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { searchDishes } from '../../Redux/API/apiAction';



const useStyles = makeStyles(() => ({
  form: {
    marginTop: '15px'
  }
}))

const SearchDishForm = () => {
  const styles = useStyles();
  const [inputValue, setInputValue] = React.useState('');
  const dispatch = useDispatch();

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setInputValue('');
    dispatch(searchDishes(inputValue));
  }

  
  return (
    <form 
    className={styles.form} 
    noValidate 
    autoComplete="off"
    onSubmit={handleSubmit}
  >
    <TextField 
      id="outlined-basic" 
      label="Enter dish name" 
      variant="outlined"
      value={inputValue}
      onChange={handleChangeInput}
    />
    <Button 
      variant="outlined" 
      color="secondary"
      type="submit"
      >
      Find
    </Button>
  </form>
  )
}
export default SearchDishForm