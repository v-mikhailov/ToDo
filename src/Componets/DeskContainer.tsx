import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Container, Box, makeStyles } from '@material-ui/core';

import ListColumn from './ListColumn';
import TaskPopup from './TaskPopup';
import NewColumnForm from './NewColumnForm';
import { ColumnInterface, TaskInterface, RootState } from '../Interfaces/interfaces';
import { closeTask } from '../Redux/acion';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: '40px',
    overflowX: 'auto',
    height: '100vh'
  },
  deskContainer: {
   display: 'inline-flex',
   flexDirection: 'row',
  },
  listItem: {
    backgroundColor: 'gray',
    marginBottom: theme.spacing(2),
  },
  columnsContainer: {
    display: 'flex',
  }
}));

export type PropsFromRedux = ConnectedProps<typeof connector>;

const DeskContainer : React.FC<PropsFromRedux> = ({newTasks , columns, openedTask, closeTask}) => {
  const styles = useStyles();
  const filterTasks = (tasks: TaskInterface[], columnId: number) => tasks.filter((task: TaskInterface) => task.columnId === columnId);
  const handleClick = (event: any) => {
    if (event.target.className === 'MuiDialog-container MuiDialog-scrollPaper') {
      closeTask();
    }
  }

  return (
    <Container className={styles.container}>
      <div className={styles.columnsContainer}>
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
                  tasks={filterTasks(newTasks, column.id)}
                />
              )
            })
          }
          <TaskPopup 
            fullTask={openedTask}
            columns={columns}
          />    
        </Box>
        <div>
          <NewColumnForm prevColumns={columns}/>
        </div>
      </div>
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