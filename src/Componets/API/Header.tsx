import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Button, makeStyles, Toolbar, Typography, Theme } from '@material-ui/core';
import SearchDishForm from './SeacrhDishForm';

interface HeaderProps {
  isDishDetailPage: boolean
}

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    backgroundColor: '#fff'
  },
  name: {
    color: theme.palette.warning.dark,
    fontWeight: 'bold',
    [theme.breakpoints.only('xs')]: {
      fontSize: '16px'
    },
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  bttn: {
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

const Header : React.FC<HeaderProps> = ({isDishDetailPage}) => {
  const styles = useStyles();

  return (
  <AppBar position="static" className={styles.appBar}>
    <Toolbar className={styles.toolBar}>
      <Link to="/api" className={styles.link}>
        <Typography variant="h4" className={styles.name}>
          Recipe Finder
        </Typography>
      </Link>
     { 
      isDishDetailPage ? (
        <Link to="/api" className={styles.link}>
          <Button 
            variant="outlined" 
            color="inherit"
            className={styles.bttn}
          >
            Main page
          </Button>
        </Link> 
        ):(
          <SearchDishForm />
        )
      }
    </Toolbar>
  </AppBar>
  )
}


export default Header;