import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton, Divider, Typography, Dialog, Toolbar, Box, DialogTitle, TextField, List, ListItem, ListItemText, makeStyles, Theme } from '@material-ui/core';
import WhatshotOutlinedIcon from '@material-ui/icons/WhatshotOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { deleteTask, closeTask } from '../Redux/acion';
import MoveToCard from './MoveToCard';
import { RootState } from '../Redux/rootReducer';


const useStyles = makeStyles((theme: Theme) => ({
  cardHeader: {
    displya: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    }
  },
  headerTitle: {
    padding: 0
  },
  cardDeadline: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'space-between'
    }
  },
  deadlineIcon: {
    marginRight: theme.spacing(1)
  },
  deadlineField: {
    marginTop: 0,
    width: '100px'
  },
  menuButton: {
    padding: 0,
    marginRight: theme.spacing(1)
  },
  dialogContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingBottom: '30px',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    }
  },
  dialogTaskInfo: {
    width: '65%',
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  },
  dialogTaskActions: {
    width: '25%',
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  },
  listItem: {
    backgroundColor: '#f6f6f7',
    paddingLeft: '10px',
    marginBottom: '8px'
  }
}))

const TaskPopup = () => {
  const fullTask = useSelector((state: RootState) => state.tasks.openedTask);
  const columns = useSelector((state: RootState) => state.columns.columns);
  const dispatch = useDispatch();
  const styles = useStyles();

  const handleDeleteClick = () => {
    dispatch(deleteTask(fullTask.task!.id));
  }

  const handleClick = (event: any) => {
    if (event.target.className === 'MuiDialog-container MuiDialog-scrollPaper') {
      dispatch(closeTask());
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
            <Toolbar className={styles.cardHeader}>
              <Box>
                <Toolbar disableGutters={true}>
                  <DialogTitle className={styles.headerTitle}>
                    {fullTask.task?.title}
                  </DialogTitle>
                </Toolbar>
              </Box>
              <Box className={styles.cardDeadline}>
                { fullTask.task?.isUrgent &&  <WhatshotOutlinedIcon className={styles.deadlineIcon}/> }
                <TextField
                  label="Deadline time"
                  defaultValue={fullTask.task?.deadline}
                  className={styles.deadlineField}
                />
              </Box>
            </Toolbar>
            <Divider />
            <div className={styles.dialogContainer}>
              <div className={styles.dialogTaskInfo}>
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
              <div className={styles.dialogTaskActions}>
                <Typography component={'span'} variant="subtitle1">
                  <Box fontWeight="fontWeightMedium" m={1}>
                    Actions: 
                  </Box>
                </Typography>
                <List disablePadding={true}>
                  <ListItem 
                    className={styles.listItem}
                    disableGutters={true}
                    onClick={handleDeleteClick}
                  >
                    <IconButton edge="end" className={styles.menuButton}>
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
                        return (
                          <MoveToCard 
                            currentColumn={column} 
                            currentTaskId={fullTask.task!.id} 
                            key={column.id}
                          />
                        )
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

export default TaskPopup;
