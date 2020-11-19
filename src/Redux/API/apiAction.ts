import axios from 'axios';
import { SEARCH_DISH_FAILURE, SEARCH_DISH_STARTED, SEARCH_DISH_SUCCESS } from './apiConstants';

const API_ENDPOINT ='https://www.themealdb.com/api/json/v1/1/';
const API_SEARCH_MEAL = 'search.php?s=';


export const searchDishes = (inputValue: any) => {
  // не понимаю эту магию. Откуда берется dispatch, который вовзращает searchDishes()?
  return (dispatch: any) => {
    dispatch(searchDishStarted())

    axios.get(`${API_ENDPOINT}${API_SEARCH_MEAL}${inputValue}`)
      .then((result: any) => {
        setTimeout(() => {
          dispatch(searchDishSuccess(result.data.meals))
        }, 1000)
      })
      .catch(err => {
        dispatch(searchDishFailure(err.message))
      })
  }
}

const searchDishSuccess = (dishList: any) => ({
  type: SEARCH_DISH_SUCCESS,
  payload: dishList
});

const searchDishStarted = () => ({
  type: SEARCH_DISH_STARTED
});

const searchDishFailure = (error: any) => ({
  type: SEARCH_DISH_FAILURE,
  payload: error
});


