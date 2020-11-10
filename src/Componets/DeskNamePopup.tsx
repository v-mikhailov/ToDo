import React from 'react';
import { connect } from 'react-redux';
import { Dialog, DialogContent, DialogTitle, TextField, Divider, Button ,makeStyles } from '@material-ui/core';
import { changeDeskName } from '../Redux/acion';

interface DeskNamePopupProps {
  open: boolean,
  deskId: number,
  onClose: () => void,
  // сделать type
  changeDeskName: (deskName: object) => object
};

const useStyles = makeStyles((theme) => ({
  confirmButton: {
    display: 'block',
    marginTop: theme.spacing(2),
    marginLeft: 'auto'
  },
}));


const DeskNamePopup: React.FC<DeskNamePopupProps> = ({open, deskId, onClose, changeDeskName}) => {
  const styles = useStyles()
  const [inputValue, setInputValue] = React.useState('');

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
      changeDeskName(newName)
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

const mapDispatchToProps = {
  changeDeskName
}

export default connect(null, mapDispatchToProps)(DeskNamePopup);