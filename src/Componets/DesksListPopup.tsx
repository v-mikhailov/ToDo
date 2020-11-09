import React from 'react';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface DesksListPopupProps {
  open: boolean,
  onClose: () => void
}
const DesksListPopup: React.FC<DesksListPopupProps> = ({open, onClose}) => {

  const handleClose = () => {
    onClose()
  }

  return(
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>
        title
      </DialogTitle>
      <DialogContent>
        <ul>
          <li>
            <Link to="/">Desk 1</Link>
          </li>
          <li>
            <Link to="/Desk2">Desk 2</Link>
          </li>
          <li>
            <Link to="/Desk3">Desk 3</Link>
          </li>
        </ul>
      </DialogContent>
    </Dialog>
  )
}

export default DesksListPopup;