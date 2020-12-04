import React from 'react';
import { useSelector } from 'react-redux';
import { Container, CircularProgress } from '@material-ui/core';

import DishList from "./DishList"
import SearchBy from './SearchBy';
import Header from './Header';
import { RootState } from '../../Redux/rootReducer';

const ApiPage = () => {
  const loading = useSelector((state: RootState) => state.dishes.loading);

  return (
    <React.Fragment>
      <Header />
      <SearchBy />
      <Container>
        { loading && <CircularProgress /> }
        <DishList/>
      </Container>
    </React.Fragment>
  )
}

export default ApiPage;