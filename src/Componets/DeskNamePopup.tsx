import React from 'react';
import { Dialog, DialogContent, DialogTitle, FormControl, TextField, Divider } from '@material-ui/core';

interface DeskNamePopupProps {
  open: boolean,
  onClose: () => void
}
const DeskNamePopup: React.FC<DeskNamePopupProps> = ({open, onClose}) => {

  const handleClose = () => {
    // Cохранение в стейт
    
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
        <form noValidate>
          <FormControl
            required={true}
            variant="outlined"
          >
          <TextField 
            label="Enter new desk name"
            multiline={true}
            fullWidth={true}
          />
          </FormControl>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default DeskNamePopup;