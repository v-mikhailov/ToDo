import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import DishCard from './DishCard';
import { RootState } from '../../Redux/rootReducer';
import { getRandomDishes } from '../../Redux/API/apiAction';


const useStyles = makeStyles(() => ({
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gridGap: '2vw',
    paddingTop: '30px',
    paddingBottom: '30px'
  }
}));

const DishList = () => {
  const styles = useStyles();
  const foundDishes = useSelector((state: RootState) => state.dishes.dishes);
  const randomDishes = useSelector((state: RootState) => state.dishes.randomDishes);
  const dishesByArea = useSelector((state: RootState) => state.dishes.dishesByArea);
  const dishesByCategory = useSelector((state: RootState) => state.dishes.dishesByCategory);
  const dispatch = useDispatch();

  const getRandomDishList = () => {
    dispatch(getRandomDishes())
  }

  return (
    <div className={styles.gridContainer}>
      {
        (!foundDishes.length && !randomDishes.length && !dishesByArea.length && !dishesByCategory.length) && getRandomDishList()
      }
      {
        dishesByCategory.length ? <DishCard dishes={dishesByCategory}/> :
        dishesByArea.length ? <DishCard dishes={dishesByArea}/> :
        foundDishes.length ? <DishCard dishes={foundDishes}/> :
        randomDishes.length ? <DishCard dishes={randomDishes}/> :
        <div></div>
      }
    </div>
  )
}

export default DishList;