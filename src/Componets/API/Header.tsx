import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Button, makeStyles, Toolbar, Typography, Theme, Box } from '@material-ui/core';
import SearchDishForm from './SeacrhDishForm';

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    backgroundColor: '#fff'
  },
  name: {
    color: theme.palette.warning.dark,
    fontWeight: 'bold'
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  toDoBttn: {
    color: '#000',
    marginRight: '15px',
  },
  link: {
    textDecoration: "none",
    color: 'inherit'
  },
  logo: {
    width: '80px',
    height: '80px'
  },
  searchContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
}))

const Header = () => {
  const styles = useStyles();

  return (
  <AppBar position="static" className={styles.appBar}>
    <Toolbar className={styles.toolBar}>
      <Typography variant="h4" className={styles.name}>
        Recipe Finder
      </Typography>
      <SearchDishForm />
      <Link to="/" className={styles.link}>
        <Button 
          variant="outlined" 
          color="inherit"
          className={styles.toDoBttn}
        >
          To Do List
        </Button>
      </Link>
      
    </Toolbar>
  </AppBar>
  )
}


export default Header;