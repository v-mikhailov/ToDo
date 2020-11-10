import React from 'react';
import { connect } from 'react-redux';
import { Dialog, DialogContent, DialogTitle, TextField, Divider, Button } from '@material-ui/core';
import { createDesk } from '../Redux/acion';
import { DeskInterface } from '../Interfaces/interfaces'

interface NewDeskFormPopupProps {
  desks: DeskInterface[],
  open: boolean,
  onClose: () => void,
  createDesk: (deskData: DeskInterface) => object
}

const NewDeskFormPopup: React.FC<NewDeskFormPopupProps> = ({desks ,open, onClose, createDesk}) => {
  const [inputValue, setInputValue] = React.useState('');

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
      createDesk(newDesk);
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

const mapStateToProps = (state: any) => {
  return {
    desks: state.desks.desks
  }
}

const mapDispatchToProps = {
  createDesk
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDeskFormPopup);