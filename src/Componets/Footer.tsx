import React from 'react';
import { Container, Divider, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    paddingTop: '30px',
    paddingBottom: '20px'
  },
  text: {
    color: theme.palette.text.secondary
  }
}))

const Footer = () => {
  const styles = useStyles();

  return(
    <React.Fragment>
      <Divider/>
      <Container className={styles.footer}>
        <span className={styles.text}>Created by Vladimir Mikhailov</span>
      </Container>
    </React.Fragment>
  )
}

export default Footer;

