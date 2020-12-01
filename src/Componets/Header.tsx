import React from 'react';
import { Link } from 'react-router-dom';

import { Grid, AppBar,  Toolbar, IconButton, Typography, Box, Button, makeStyles} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

import DesksListPopup from './DesksListPopup';
import DeskNamePopup from './DeskNamePopup';
import NewDeskFormPopup from './NewDeskFormPopup';

interface HeaderProps {
  deskName: string,
  deskId: number
}

const useStyles = makeStyles(() => ({
  apiBttn: {
    marginRight: '15px',
  },
  
  link: {
    textDecoration: "none",
    color: 'inherit'
  }
}))

const Header: React.FC<HeaderProps> = ({deskName, deskId}) => {
  const styles = useStyles();
  const [desksListPopupIsOpen, setDesksListPopupIsOpen] = React.useState(false);
  const [desksNamePopupIsOpen, setDesksNamePopupIsOpen] = React.useState(false);
  const [newDeskFormIsOpen, setNewDeskFormIsOpen] = React.useState(false);

  const handleDeskListPopupClickOpen = () => {
    setDesksListPopupIsOpen(true);
  }

  const handleDeskListPopupClose = () => {
    setDesksListPopupIsOpen(false);
  }

  const handleDeskNamePopupClickOpen = () => {
    setDesksNamePopupIsOpen(true)
  }

  const handleDeskNamePopupClose = () => {
    setDesksNamePopupIsOpen(false);
  }

  const handleNewDeskFormClick = () => {
    setNewDeskFormIsOpen(true);
  }

  const handleNewDeskFormClose = () => {
    setNewDeskFormIsOpen(false);
  }

  return (
    <AppBar position="static">
      <Toolbar className="">
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Typography variant="h4">
            To Do List
          </Typography>
          <Toolbar>
            <Typography variant="h5">
              {deskName}
            </Typography>
            <IconButton 
              color="inherit"
              onClick={handleDeskNamePopupClickOpen}
            >
              <EditIcon fontSize="small"/>
            </IconButton>
          </Toolbar>
          <Box>
            <Link to="/api" className={styles.link}>
              <Button 
                variant="outlined" 
                color="inherit"
                className={styles.apiBttn}
              >
                API testing
              </Button>
            </Link>
            <Button 
              variant="outlined" 
              color="inherit"
              onClick={handleDeskListPopupClickOpen}
            >
              My Desks
            </Button>
            <IconButton 
              color="inherit"
              onClick={handleNewDeskFormClick}
            >
              <AddIcon fontSize='large'/>
            </IconButton>
          </Box>
        </Grid>
     </Toolbar>
     <DesksListPopup 
        open={desksListPopupIsOpen}
        onClose={handleDeskListPopupClose}
        deskId={deskId}
      />
      <DeskNamePopup 
        open={desksNamePopupIsOpen}
        onClose={handleDeskNamePopupClose}
        deskId={deskId}
      />
      <NewDeskFormPopup
        open={newDeskFormIsOpen}
        onClose={handleNewDeskFormClose}
      />
      
    </AppBar>   
  )
}


export default Header;