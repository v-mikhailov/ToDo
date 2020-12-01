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
  confirmButton: {
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
      maxWidth="xs"
    >
      <DialogTitle>
        Desk name
      </DialogTitle>
      <Divider />
      <DialogContent >
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            label="Enter new desk name"
            fullWidth={true}
            value={inputValue}
            onChange={handleInputChange}
          />
        <Button 
          variant="contained" 
          color="secondary"
          size="small"
          className={styles.confirmButton}
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