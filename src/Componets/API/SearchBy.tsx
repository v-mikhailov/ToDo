import React, { useState } from 'react';
import { Container, Grid, makeStyles, Switch, Theme, Typography } from '@material-ui/core';

import CategoriesList from './CategoriesList';
import AreaList from './AreaList';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: 'auto',
    padding: '20px 0 35px 0',
    backgroundColor: '#f5f6ea',
  },
  menuContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row'
    },
  }
}));

const SearchBy = () => {
  const styles = useStyles();
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitch = () => {
    setIsChecked(!isChecked);
  }

  return (
    <div className={styles.container}>
      <Container className={styles.menuContainer}>
        <Typography component="div">
          <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item>Category</Grid>
            <Grid item>
              <Switch 
                checked={isChecked}
                onChange={handleSwitch}
              />
            </Grid>
            <Grid item>Area</Grid>
          </Grid>
        </Typography>
        {
          isChecked ? <AreaList /> : <CategoriesList />
        }
      </Container>
    </div>
  )
}

export default SearchBy;