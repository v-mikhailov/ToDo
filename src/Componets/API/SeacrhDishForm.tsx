import React from 'react';
import { Box, IconButton, InputBase, makeStyles, Paper, Theme, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch } from 'react-redux';
import { searchDishes } from '../../Redux/API/apiAction';

const useStyles = makeStyles((theme: Theme) => ({
  formContainer: {
    display: 'flex',
    alignItems: 'baseline',
    width: 'auto',
    maxWidth: '400px',
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid black',
    padding: '4px 0 4px 8px',
    width: '80%',
    [theme.breakpoints.only('xs')]: {
      padding: '2px 0 2px 4px',
    },
  },
  iconButton: {
    padding: 4,
  },
  input: {
    [theme.breakpoints.only('xs')]: {
      fontSize: '10px'
    },
  },
  label: {
    color: '#000',
    marginRight: theme.spacing(1),
    [theme.breakpoints.only('xs')]: {
      fontSize: '10px'
    },
  }
}))

const SearchDishForm = () => {
  const styles = useStyles();
  const [inputValue, setInputValue] = React.useState('');
  const dispatch = useDispatch();

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (inputValue) {
      setInputValue('');
      dispatch(searchDishes(inputValue));
    }
  }

  
  return (
    <Box className={styles.formContainer}>
      <Typography variant="button" className={styles.label}> 
        Search
      </Typography>
      <Paper 
      component="form" 
      className={styles.form}
      onSubmit={handleSubmit}
      >
        <InputBase
          placeholder="Find a Recipe"
          fullWidth={true}
          value={inputValue}
          onChange={handleChangeInput}
          className={styles.input}
        />
        <IconButton 
          type="submit" 
          className={styles.iconButton}
        >
          <SearchIcon/>
        </IconButton>
      </Paper>
    </Box>
  )
}
export default SearchDishForm