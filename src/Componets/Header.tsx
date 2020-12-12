import React from 'react';

import { Grid, AppBar,  Toolbar, IconButton, Typography, Box, Button, makeStyles, Theme} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

import DesksListPopup from './DesksListPopup';
import DeskNamePopup from './DeskNamePopup';
import NewDeskFormPopup from './NewDeskFormPopup';

interface HeaderProps {
  deskName: string,
  deskId: number
}

const useStyles = makeStyles((theme: Theme) => ({
  toolbar: {
    [theme.breakpoints.down('xs')]: {
      
    }
  },
  title: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      textAlign: 'center'
    }
  },
  deskNameBlock: {
    [theme.breakpoints.down('xs')]: {
      padding: 0
    }
  },
  deskName: {
    fontSize: '24px',
    [theme.breakpoints.down('xs')]: {
     fontSize: '18px'
    }
  },
  button: {
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '10px',
      paddingRight: '10px',
      fontSize: '12px'
     }
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
      <Toolbar className={styles.toolbar}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Typography variant="h4" className={styles.title}>
            To Do List
          </Typography>
          <Toolbar className={styles.deskNameBlock}>
            <Typography className={styles.deskName}>
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
            <Button 
              variant="outlined" 
              color="inherit"
              onClick={handleDeskListPopupClickOpen}
              className={styles.button}
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