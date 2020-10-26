import React from 'react';
import { connect } from 'react-redux';
import { Container, Box, makeStyles } from '@material-ui/core';

import ListColumn from './ListColumn';
import { ColumnInterface, TaskInterface } from '../Interfaces/interfaces';



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
  }
}));

interface DeskContainerProps {
  newTasks?: TaskInterface[]
}

const DeskContainer : React.FC<DeskContainerProps> = ({newTasks}) => {
  const styles = useStyles();
  const [columns, setColumns] = React.useState<ColumnInterface[]>([{title: 'To Do', type: "new", id: 1},{title: 'In progress', type: 'inProgress' ,id: 2},{title: 'Done', type: 'isCompleted', id: 3}])

  // что не так  с (tasks: TaskInterface[])?
  const filterTasks = (tasks: any, columnType: string) => tasks.filter((task: TaskInterface) => task.type === columnType);

  return (
    <Container className={styles.container}>
      <Box className = {styles.deskContainer}>
        {
          columns.map(column => {
           return <ListColumn key={column.id} columnData={column} tasks={filterTasks(newTasks, column.type)}/>
          })
        }
      </Box>
    </Container>
  )
}

const mapStateToProps = (state: any) => {
  return {
    newTasks: state.tasks.tasks 
  }
}

export default connect(mapStateToProps, null)(DeskContainer);