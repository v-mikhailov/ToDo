import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Container, Box, makeStyles } from '@material-ui/core';


import ListColumn from './ListColumn';
import { ColumnInterface, TaskInterface, RootState } from '../Interfaces/interfaces';


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

const DeskContainer : React.FC<PropsFromRedux> = ({newTasks , columns}) => {
  const styles = useStyles();
  // const [columns, setColumns] = React.useState<ColumnInterface[]>([{title: 'To Do', type: "new", id: 1},{title: 'In progress', type: 'inProgress' ,id: 2},{title: 'Done', type: 'isCompleted', id: 3}])

  const filterTasks = (tasks: TaskInterface[], columnType: string) => tasks.filter((task: TaskInterface) => task.type === columnType);

  return (
    <Container className={styles.container}>
      <Box className = {styles.deskContainer}>
        {
          // как исправить эту ошибку?
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
      </Box>
    </Container>
  )
}

const mapStateToProps = (state: RootState) => {
  return {
    newTasks: state.tasks.tasks,
    columns: state.columns.columns
  }
}

const connector = connect(mapStateToProps, null);

export default connector(DeskContainer);