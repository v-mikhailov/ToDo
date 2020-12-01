import React from 'react';
import { useSelector } from 'react-redux';
import { Dialog, DialogContent, DialogTitle, Divider, List, ListItem, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { DeskInterface } from '../Interfaces/interfaces';
import { RootState } from '../Redux/rootReducer';

interface DesksListPopupProps {
  open: boolean,
  deskId: number,
  onClose: () => void,
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '200px',
    backgroundColor: theme.palette.background.paper,
  },
  dialogContent: {
    padding: 0
  }
}));


const DesksListPopup: React.FC<DesksListPopupProps> = ({open, deskId, onClose}) => {
  const desks = useSelector((state: RootState) => state.desks.desks)
  const styles = useStyles();
  const handleClose = () => {
    onClose()
  }

  return(
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>
        My desks
      </DialogTitle>
      <Divider />
      <DialogContent className={styles.dialogContent}>
        <div className={styles.root}>
          <List>
            {
              desks.map((desk: DeskInterface) => {
                if (desk.id !== deskId) {
                  return (
                    <ListItem button key={desk.id}>
                      <Link to={`/desk/${desk.id}`}>{desk.title}</Link>
                    </ListItem>
                  )
                }
              })
            }
          </List>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default DesksListPopup;