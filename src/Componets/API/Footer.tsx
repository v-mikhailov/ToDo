import React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  footer: {
    padding: '30px 0',
    backgroundColor: '#f2f2f2'
  }
}))

const Footer = () => {
  const styles = useStyles();

  return(
    <div className={styles.footer}>
      <Container>
        <Typography>
        Created by Vladimir Mikhailov
      </Typography>
      </Container>
    </div>
  )
}

export default Footer;