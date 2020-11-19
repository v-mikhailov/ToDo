import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, TextField,CircularProgress, makeStyles } from '@material-ui/core';

import DishList from "./DishList"
import { searchDishes } from '../../Redux/API/apiAction';
import { RootState } from '../../Redux/rootReducer';

const useStyles = makeStyles(() => ({
  form: {
    marginTop: '15px'
  }
}))

const ApiPage = () => {
  const styles = useStyles();
  const [inputValue, setInputValue] = React.useState('');
  const loading = useSelector((state: RootState) => state.dishes.loading)
  const isComplete = useSelector((state: RootState) => state.dishes.isComplete);
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
    <React.Fragment>
      <Container>
        <Link to="/">
          To Do List
        </Link>
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
        { loading && <CircularProgress /> }
        { isComplete && <DishList/> }
       

      </Container>
    </React.Fragment>
  )
}

export default ApiPage;