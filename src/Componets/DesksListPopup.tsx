import React from 'react';
import { useSelector } from 'react-redux';
import { Dialog, DialogContent, DialogTitle, Divider, List, ListItem, makeStyles, Theme } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { DeskInterface } from '../Interfaces/interfaces';
import { RootState } from '../Redux/rootReducer';

interface DesksListPopupProps {
  open: boolean,
  deskId: number,
  onClose: () => void,
}

const useStyles = makeStyles((theme: Theme) => ({
  dialogContent: {
    padding: 0,
    overflow: 'hidden',
  },
  contentContainer: {
    width: '250px',
    backgroundColor: theme.palette.background.paper,
  },
  list: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(3),
  },
  infolistItem: {
   textAlign: 'center'
  },
  listItem: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary
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
        <div className={styles.contentContainer}>
          <List className={styles.list}>
            {
              desks.length <= 1 && (
                <ListItem classes={{
                  root: styles.infolistItem,
                  gutters: styles.listItem,
                }}
                >
                  There are no other desks
                </ListItem>
              )
            }
            {
              desks.map((desk: DeskInterface) => {
                if (desk.id !== deskId) {
                  return (
                    <ListItem button key={desk.id} className={styles.listItem}>
                      <Link to={`/desk/${desk.id}`} className={styles.link}>
                        {desk.title}
                      </Link>
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