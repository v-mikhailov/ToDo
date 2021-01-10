import React from 'react';
import { useDispatch } from 'react-redux';
import { Dialog, DialogContent, DialogTitle, TextField, Divider, Button ,makeStyles } from '@material-ui/core';
import { changeDeskName } from '../Redux/acion';

interface DeskNamePopupProps {
  open: boolean,
  deskId: number,
  onClose: () => void,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '250px'
  },
  textField: {
    marginBottom: theme.spacing(2)
  },
  dialogContent: {
    paddingBottom: theme.spacing(2)
  },
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
    marginLeft: 'auto'
  },
}));


const DeskNamePopup: React.FC<DeskNamePopupProps> = ({open, deskId, onClose}) => {
  const [inputValue, setInputValue] = React.useState('');
  const dispatch = useDispatch();
  const styles = useStyles()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const handleClose = () => {

    onClose();
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue !== '') {
      const newName = {
        title: inputValue,
        deskId
      }
      dispatch(changeDeskName(newName));
    }
    setInputValue('');
    onClose();
  }

  return(
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <DialogTitle className={styles.root}>
        Desk name
      </DialogTitle>
      <Divider />
      <DialogContent className={styles.dialogContent}>
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            label="Enter new desk name"
            fullWidth={true}
            value={inputValue}
            onChange={handleInputChange}
            className={styles.textField}
          />
          <Button 
            variant="contained" 
            color="secondary"
            size="small"
            className={styles.button}
            type="submit"
          >
            Rename
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default DeskNamePopup;