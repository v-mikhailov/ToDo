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
    paddingTop: '30px'
  }
}));

const DishList = () => {
  const styles = useStyles();
  const foundDishes = useSelector((state: RootState) => state.dishes.dishes);
  const randomDishes = useSelector((state: RootState) => state.dishes.randomDishes);
  const dispatch = useDispatch();

  const getRandomDishList = () => {
    dispatch(getRandomDishes())
  }

  return (
    <div className={styles.gridContainer}>
      {
        (!foundDishes.length && !randomDishes.length) && getRandomDishList()
      }
      { 
        foundDishes.length ? <DishCard dishes={foundDishes}/> :
        randomDishes.length ? <DishCard dishes={randomDishes}/> :
        'Ошибка'
      }
    </div>
  )
}

export default DishList;