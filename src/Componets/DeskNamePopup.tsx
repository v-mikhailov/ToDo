import React from 'react';
import { connect } from 'react-redux';
import { Dialog, DialogContent, DialogTitle, TextField, Divider } from '@material-ui/core';
import { changeDeskName } from '../Redux/acion';

interface DeskNamePopupProps {
  open: boolean,
  deskId: number,
  onClose: () => void,
  // сделать type
  changeDeskName: (deskName: object) => object
}
const DeskNamePopup: React.FC<DeskNamePopupProps> = ({open, deskId, onClose, changeDeskName}) => {
  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
    setInputValue(event.target.value);
  }

  const handleClose = () => {
    if (inputValue !== '') {
      const newName = {
        title: inputValue,
        deskId
      }
      changeDeskName(newName)
    }
    setInputValue('');
    onClose()
  }

  return(
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>
        Rename your Desk
      </DialogTitle>
      <Divider />
      <DialogContent>
        <TextField 
          label="Enter new desk name"
          multiline={true}
          fullWidth={true}
          value={inputValue}
          onChange={handleInputChange}
        />
      </DialogContent>
    </Dialog>
  )
}

const mapDispatchToProps = {
  changeDeskName
}

export default connect(null, mapDispatchToProps)(DeskNamePopup);