import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, CircularProgress } from '@material-ui/core';

import DishList from "./DishList"
import SearchDishForm from './SeacrhDishForm';
import { RootState } from '../../Redux/rootReducer';

const ApiPage = () => {
  const loading = useSelector((state: RootState) => state.dishes.loading);

  return (
      <Container>
        <Link to="/">
          To Do List
        </Link>
        <SearchDishForm />
        { loading && <CircularProgress /> }
        <DishList/>
      </Container>
  )
}

export default ApiPage;