import React from 'react';
import { Container, Box, makeStyles,} from '@material-ui/core';
import ListColumn from './ListColumn';
import { ColumnInterface } from './interfaces'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: '40px'
  },
  deskContainer: {
   display: 'flex',
   flexDirection: 'row',
   flexWrap: 'wrap',
  },
}));

const DeskContainer = () => {
  const styles = useStyles();
  const [columns, setColumns] = React.useState<ColumnInterface[]>([{title: 'To Do'},{title: 'In progress'},{title: 'Done'}])

  return (
    <Container className={styles.container}>
      <Box className = {styles.deskContainer}>
        {
          columns.map(column => {
           return <ListColumn data={column}/>
          })
        }
      </Box>
    </Container>
  )
}

export default DeskContainer;