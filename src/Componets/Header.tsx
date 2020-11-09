import React from 'react';
import { Grid, AppBar,  Toolbar, IconButton, Typography, Box, Button} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

import DesksListPopup from './DesksListPopup';
import DeskNamePopup from './DeskNamePopup';

interface HeaderProps {
  deskName: string
}

const Header: React.FC<HeaderProps> = ({deskName}) => {
  const [desksListPopupIsOpen, setDesksListPopupIsOpen] = React.useState(false);
  const [desksNamePopupIsOpen, setDesksNamePopupIsOpen] = React.useState(false);

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
            <Button 
              variant="outlined" 
              color="inherit"
              onClick={handleDeskListPopupClickOpen}
            >
              My Desks
            </Button>
            <IconButton color="inherit">
              <AddIcon fontSize='large'/>
            </IconButton>
          </Box>
        </Grid>
     </Toolbar>
     <DesksListPopup 
        open={desksListPopupIsOpen}
        onClose={handleDeskListPopupClose}
      />
      <DeskNamePopup 
        open={desksNamePopupIsOpen}
        onClose={handleDeskNamePopupClose}
      />
    </AppBar>   
  )
}


export default Header;