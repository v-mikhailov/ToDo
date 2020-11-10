import React from 'react';
import { Container, Box, makeStyles } from '@material-ui/core';

import ListColumn from './ListColumn';
import TaskPopup from './TaskPopup';
import NewColumnForm from './NewColumnForm';


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


interface DeskContainerProps {
  deskId: number
}

const DeskContainer : React.FC<DeskContainerProps> = ({deskId}) => {
  const styles = useStyles();

  return (
    <Container className={styles.container}>
      <div className={styles.columnsContainer}>
        <Box className={styles.deskContainer}>
          <ListColumn deskId={deskId}/>
          <TaskPopup/>
        </Box>
        <div>
          <NewColumnForm deskId={deskId}/>
        </div>
      </div>
    </Container> 
  )
}

export default DeskContainer;