import React from 'react';
import { useSelector } from 'react-redux';
import { Container, CircularProgress, Box } from '@material-ui/core';

import DishList from "./DishList"
import SearchBy from './SearchBy';
import Header from './Header';
import Footer from './Footer';
import { RootState } from '../../Redux/rootReducer';

const ApiPage = () => {
  const loading = useSelector((state: RootState) => state.dishes.loading);

  return (
    <Box >
      <Header isDishDetailPage={false}/>
      <SearchBy />
      <Container>
        { loading ? <CircularProgress /> : <DishList/> }
      </Container>
      <Footer/>
    </Box>
  )
}

export default ApiPage;