import React from 'react';
import { connect } from 'react-redux';
import { IconButton, Divider, Typography, Dialog, Toolbar, Box, DialogTitle, TextField, List, ListItem, ListItemText } from '@material-ui/core';
import WhatshotOutlinedIcon from '@material-ui/icons/WhatshotOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { TaskInterface, ColumnInterface } from '../Interfaces/interfaces';
import { deleteTask, closeTask } from '../Redux/acion';
import MoveToCard from './MoveToCard';


interface dialogPopupProps {
  fullTask: {
    isOpen: boolean,
    task: TaskInterface | null
  },
  columns: ColumnInterface[],
  deleteTask: (taskId: number) => object,
  closeTask: () => object
} 

const TaskPopup: React.FC<dialogPopupProps> = ({fullTask, columns,  deleteTask, closeTask}) => {
  const handleDeleteClick = (event: React.MouseEvent<HTMLElement>) => {
    deleteTask(fullTask.task!.id);
  }

  const handleClick = (event: any) => {

    if (event.target.className === 'MuiDialog-container MuiDialog-scrollPaper') {
      closeTask();
    }
  }

  return (
    <React.Fragment>
      {
        fullTask.isOpen && (
          <Dialog
            open={true}
            fullWidth={true}
            maxWidth='sm'
            className='dialog'
            onClick={handleClick}
          >
            <Toolbar>
              <Box>
                <Toolbar disableGutters={true}>
                  <DialogTitle>
                    {fullTask.task?.title}
                  </DialogTitle>
                  {/* сделать popover */}
                  { fullTask.task?.isUrgent &&  <WhatshotOutlinedIcon/> }
                </Toolbar>
              </Box>
              <TextField
                label="Deadline"
                defaultValue={fullTask.task?.deadline}
              />
            </Toolbar>
            <Divider />
            <div className='dialog__container'>
              <div className='dialog__task-info'>
              <Typography component={'span'} variant="subtitle1">
                <Box fontWeight="fontWeightMedium" m={1}>
                  Description
                </Box>
              </Typography>
              <Typography component={'span'} variant="body1">
                <Box fontWeight="fontWeightRegular" m={1}>
                {fullTask.task?.descr}
                </Box>
              </Typography>
              </div>
              <div className='dialog__task-actions'>
                <Typography component={'span'} variant="subtitle1">
                  <Box fontWeight="fontWeightMedium" m={1}>
                    Actions: 
                  </Box>
                </Typography>
                <List disablePadding={true}>
                  <ListItem 
                    className="list-item" 
                    disableGutters={true}
                    onClick={handleDeleteClick}
                  >
                    <IconButton edge="end">
                      <DeleteOutlineOutlinedIcon />
                    </IconButton>
                    <ListItemText
                      primary="Delete task"
                    />
                  </ListItem>
                </List>
                <Typography component={'span'} variant="subtitle1">
                  <Box fontWeight="fontWeightMedium" m={1}>
                    Move task: 
                  </Box>
                </Typography>
                <List>
                  {
                    columns.map(column => {
                      if (column.id !== fullTask.task?.columnId) {
                        return <MoveToCard currentColumn={column} currentTaskId={fullTask.task!.id} key={column.id++}/>
                      }
                    })
                  }
                </List>
              </div>
            </div>
          </Dialog>
        )
      }
    </React.Fragment>
  )
}

const mapDispatchToProps = {
  deleteTask,
  closeTask
}

const mapStateToProps = (state: any) => {
  return {
    fullTask: state.tasks.openedTask,
    columns: state.columns.columns,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskPopup);