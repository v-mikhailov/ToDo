import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dialog, DialogContent, DialogTitle, TextField, Divider, Button, makeStyles, Theme } from '@material-ui/core';
import { createDesk } from '../Redux/acion';
import { DeskInterface } from '../Interfaces/interfaces'
import { RootState } from '../Redux/rootReducer';

interface NewDeskFormPopupProps {
  open: boolean,
  onClose: () => void,
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '250px'
  },
  textField: {
    marginBottom: theme.spacing(2)
  },
  button: {
    display: 'block',
    marginLeft: 'auto'
  },
  dialogContent: {
    paddingBottom: theme.spacing(2)
  }
}))

const NewDeskFormPopup: React.FC<NewDeskFormPopupProps> = ({open, onClose}) => {
  const [inputValue, setInputValue] = React.useState('');
  const desks = useSelector((state: RootState) => state.desks.desks)
  const dispatch = useDispatch();
  const styles = useStyles();

  const calcNextDeskId = (desks: DeskInterface[]) => {
    const lastDesk = desks[desks.length - 1];
    return lastDesk.id + 1
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    calcNextDeskId(desks);
    if (inputValue !== '') {
      const newDesk = {
        title: inputValue,
        id: calcNextDeskId(desks)
      }
      dispatch(createDesk(newDesk));
    }
    setInputValue('');
    onClose();
  }

  const handleClose = () => {
    onClose();
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <DialogTitle className={styles.root}>
        New Desk
      </DialogTitle>
      <Divider />
      <DialogContent className={styles.dialogContent}>
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            label="Desk name"
            fullWidth={true}
            value={inputValue}
            onChange={handleInputChange}
            className={styles.textField}
          />
          <Button 
            variant="contained" 
            color="secondary"
            size="small"
            type="submit"
            className={styles.button}
          >   
          Create
        </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default NewDeskFormPopup;