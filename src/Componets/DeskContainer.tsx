import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Container, Box, makeStyles } from '@material-ui/core';


import ListColumn from './ListColumn';
import Dialog from './Dialog';
import { ColumnInterface, TaskInterface, RootState } from '../Interfaces/interfaces';
import { closeTask } from '../Redux/acion';


const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: '40px'
  },
  deskContainer: {
   display: 'flex',
   flexDirection: 'row',
   flexWrap: 'wrap',
  },
  listItem: {
    backgroundColor: 'gray',
    marginBottom: theme.spacing(2),
  },
}));

export type PropsFromRedux = ConnectedProps<typeof connector>;

const DeskContainer : React.FC<PropsFromRedux> = ({newTasks , columns, openedTask, closeTask}) => {
  const styles = useStyles();
  const filterTasks = (tasks: TaskInterface[], columnType: string) => tasks.filter((task: TaskInterface) => task.type === columnType);
  const handleClick = (event: any) => {
    if (event.target.className === 'MuiDialog-container MuiDialog-scrollPaper') {
      closeTask();
    }
  }

  return (
    <Container className={styles.container}>
      <Box 
        className={styles.deskContainer}
        onClick={handleClick}
      >
        {
          columns.map((column: ColumnInterface) => {
            return (
              <ListColumn
                key={column.id}
                columnData={column} 
                tasks={filterTasks(newTasks, column.type)}
              />
            )
          })
        }
        <Dialog fullTask={openedTask}/>
      </Box>
    </Container>
  )
}

const mapStateToProps = (state: RootState) => {
  return {
    newTasks: state.tasks.tasks,
    openedTask: state.tasks.openedTask,
    columns: state.columns.columns,
  }
}

const mapDispatchToProps = {
  closeTask
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(DeskContainer);