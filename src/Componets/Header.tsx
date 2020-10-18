import React from 'react';
import { Grid, AppBar,  Toolbar, IconButton, Typography, Box, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const Header = () => {

  return (
    <AppBar position="static">
      <Toolbar className="styles.toolBar">
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Typography variant="h4">
            To Do List
          </Typography>
          <Typography variant="h5">
            Desk 1
          </Typography>
          <Box>
            <Button variant="outlined" color="inherit">
              My Desks
            </Button>
            <IconButton color="inherit">
              <AddIcon fontSize='large'/>
            </IconButton>
          </Box>
        </Grid>
     </Toolbar>
    </AppBar>   
  )
}

export default Header;