import React from 'react';
import { connect } from 'react-redux'
import WhatshotOutlinedIcon from '@material-ui/icons/WhatshotOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { makeStyles, IconButton, Divider, Typography, ListItem, ListItemText, Dialog, Toolbar, Box, DialogTitle, TextField, List } from '@material-ui/core';

import { TaskInterface } from '../Interfaces/interfaces';
import { deleteTask, changeTaskType  } from '../Redux/acion';

interface TaskProps {
  deleteTask: (task: TaskInterface) => object,
  changeTaskType: (task: TaskInterface) => object,
  data: TaskInterface,
}

const useStyles = makeStyles((theme) => ({
  listItem: {
    backgroundColor: 'white',
    marginBottom: '10px'
  }
}));

const Task: React.FC<TaskProps> = ({deleteTask, changeTaskType, data}) => {
  // const [isTaskChecked, setIsTaskChecked] = React.useState(false);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const styles = useStyles();
  
  // const handleDelete = (event: React.MouseEvent) => {
  //   deleteTask(data);
  // }

  // const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setIsTaskChecked(!isTaskChecked);
  //   changeTaskType(data);
  // }

  const renderDialog = (task: TaskInterface) => {
    console.log('rendering');
    return (
      <Dialog
      open={isDialogOpen}
      fullWidth={true}
      maxWidth='sm'
      className='dialog'
      >
        <Toolbar>
          <Box>
            <Toolbar disableGutters={true}>
              <DialogTitle>
                Task Title
              </DialogTitle>
              {/* popover */}
              <WhatshotOutlinedIcon />
            </Toolbar>
          </Box>
          <TextField
            label="Deadline"
            defaultValue="2020-05-24"
          />
        </Toolbar>
        <Divider />
        <div className='dialog__container'>
          <div className='dialog__task-info'>
          <Typography variant="subtitle1">
            <Box fontWeight="fontWeightMedium" m={1}>
              Description
            </Box>
          </Typography>
          <Typography variant="body1">
            <Box fontWeight="fontWeightRegular" m={1}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur consectetur expedita eligendi accusantium ipsum corporis recusandae velit commodi beatae, necessitatibus tempora labore dolores enim voluptates ipsam molestiae impedit debitis dolor?
            </Box>
          </Typography>
          </div>
          <div className='dialog__task-actions'>
            <Typography variant="subtitle1">
              <Box fontWeight="fontWeightMedium" m={1}>
                Actions: 
              </Box>
            </Typography>
            <List disablePadding={true}>
              <ListItem className="list-item" disableGutters={true}>
                <IconButton edge="end">
                  <DeleteOutlineOutlinedIcon />
                </IconButton>
                <ListItemText
                  primary="Delete task"
                />
              </ListItem>
            </List>
            <Typography variant="subtitle1">
              <Box fontWeight="fontWeightMedium" m={1}>
                Move task: 
              </Box>
            </Typography>
            <List>
              {/* рендеринг из стейта доски с провееркой */}
              <ListItem className="list-item" disableGutters={true}>
                <ListItemText
                  primary="To Do"
                />
              </ListItem>
              <ListItem className="list-item" disableGutters={true}>
                <ListItemText
                  primary="In Progress"
                />
              </ListItem>
              <ListItem className="list-item" disableGutters={true}>
                <ListItemText
                  primary="Done"
                />
              </ListItem>
            </List>
          </div>
        </div>
      </Dialog>
    )
  }
  // как сделать рендеринг диалога по клику?
  const handleTaskClick = (event: React.MouseEvent) => {
    console.log('click');
     setIsDialogOpen(true);
     renderDialog(data);
  }

  return(
    <ListItem 
      className={styles.listItem} 
      divider={true}
      onClick={handleTaskClick}
    >
      <ListItemText primary={data.title} />
    </ListItem>
      // <Accordion >
      //   <AccordionSummary
      //    expandIcon={<ExpandMoreIcon />}
      //   >
      //     <Typography>{data.title}</Typography>
      //   </AccordionSummary>
      //   <Divider/>
      //   <AccordionDetails>
      //     <Typography>{data.descr}</Typography>
      //   </AccordionDetails>
      //   <Divider/>
      //   {
      //     data.deadline && 
      //     ( 
      //       <AccordionDetails>
      //         <Typography>Deadline time: {data.deadline}</Typography>
      //       </AccordionDetails>
      //     )
      //   }
      //   <Divider/>
      //   <AccordionDetails>
      //     <IconButton 
      //       edge="end" 
      //       aria-label="delete"
      //       onClick={handleDelete}
      //     >
      //       <DeleteIcon />
      //     </IconButton>
      //     {data.type !== 'isCompleted' && (
      //       <Checkbox
      //         checked={isTaskChecked}
      //         onChange={handleCheckboxChange}
      //         inputProps={{ 'aria-label': 'primary checkbox' }}  
      //       />
      //     )}
      //   </AccordionDetails>
      // </Accordion>
  )
}

const mapDispatchToProps = (dispatch: any) => ({
    deleteTask: (task: TaskInterface) => dispatch(deleteTask(task)),
    changeTaskType : (task: TaskInterface) => dispatch(changeTaskType(task))
})

export default connect(null, mapDispatchToProps)(Task);