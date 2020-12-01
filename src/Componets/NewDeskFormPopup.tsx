import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dialog, DialogContent, DialogTitle, TextField, Divider, Button } from '@material-ui/core';
import { createDesk } from '../Redux/acion';
import { DeskInterface } from '../Interfaces/interfaces'
import { RootState } from '../Redux/rootReducer';

interface NewDeskFormPopupProps {
  open: boolean,
  onClose: () => void,
}

const NewDeskFormPopup: React.FC<NewDeskFormPopupProps> = ({open, onClose}) => {
  const [inputValue, setInputValue] = React.useState('');
  const desks = useSelector((state: RootState) => state.desks.desks)
  const dispatch = useDispatch();

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
      <DialogTitle>
        New Desk
      </DialogTitle>
      <Divider />
      <DialogContent>
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            label="Desk name"
            fullWidth={true}
            value={inputValue}
            onChange={handleInputChange}
          />
          <Button 
            variant="contained" 
            color="secondary"
            size="small"
            type="submit"
          >   
          Create
        </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default NewDeskFormPopup;