import React from 'react';
import { connect } from 'react-redux';
import { Dialog, DialogContent, DialogTitle, Divider, List, ListItem, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { DeskInterface } from '../Interfaces/interfaces';

interface DesksListPopupProps {
  desks: DeskInterface[],
  open: boolean,
  onClose: () => void,
  deskId: number
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


const DesksListPopup: React.FC<DesksListPopupProps> = ({desks, open, onClose, deskId}) => {
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

const mapStateToProps = (state: any) => {
  return {
    desks: state.desks.desks
  }
}

export default connect(mapStateToProps)(DesksListPopup);