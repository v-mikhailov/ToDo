import axios from 'axios';
import { GET_RANDOM_DISHES_SUCCESS, API_STATUS_FAILURE, API_STATUS_STARTED, SEARCH_DISH_SUCCESS, GET_CERTAIN_DISH_SUCCESS, GET_CATEGORIES, GET_AREA_LIST, API_SEARCH_BY_AREA_SUCCESS, API_SEARCH_BY_CATEGORY_SUCCESS} from './apiConstants';

const API_KEY = '9973533';
const API_ENDPOINT =`https://www.themealdb.com/api/json/v2/${API_KEY}/`;
const API_SEARCH_DISH = 'search.php?s=';
const API_RANDOM_DISHES = 'randomselection.php';
const API_CERTAIN_DISH = 'lookup.php?i=';
const API_CATEGORIES = 'list.php?c=list';
const API_AREA_LIST = 'list.php?a=list';
const API_SEARCH_BY_AREA = 'filter.php?a=';
const API_SEARCH_BY_CATEGORY = 'filter.php?c=';


export const searchDishes = (inputValue: any) => {
  // не понимаю эту магию. Откуда берется dispatch, который вовзращает searchDishes()?
  return (dispatch: any) => {
    dispatch(apiStatusStarted());
    axios.get(`${API_ENDPOINT}${API_SEARCH_DISH}${inputValue}`)
      .then((result: any) => {
        setTimeout(() => {
          dispatch(searchDishSuccess(result.data.meals))
        }, 500)
      })
      .catch(err => {
        dispatch(apiStatusFailure(err.message))
      })
  }
}

export const getRandomDishes = () => {
  return (dispatch: any) => {
    dispatch(apiStatusStarted());
    axios.get(`${API_ENDPOINT}${API_RANDOM_DISHES}`)
      .then((result: any) => {
        dispatch(getRandomDishesSuccess(result.data.meals))
      })
      .catch(err => {
        dispatch(apiStatusFailure(err.message))
      })
  } 
}

export const getCertainDish = (dishId : string) => {
  return (dispatch: any) => {
    axios.get(`${API_ENDPOINT}${API_CERTAIN_DISH}${dishId}`)
      .then((result: any) => {
        dispatch(getCertainDishSuccess(result.data.meals[0]))
      })
      .catch(err => {
        dispatch(apiStatusFailure(err.message))
      })
  }
}

export const getCategories = () => {
  return (dispatch: any) => {
    axios.get(`${API_ENDPOINT}${API_CATEGORIES}`)
      .then((result: any) => {
        dispatch(getCategoriesSuccess(result.data.meals))
      })
      .catch(err => {
        dispatch(apiStatusFailure(err.message))
      })
  }
}

export const getAreaList = () => {
  return (dispatch: any) => {
    axios.get(`${API_ENDPOINT}${API_AREA_LIST}`)
      .then((result: any) => {
        dispatch(getAreaListSuccess(result.data.meals))
      })
      .catch(err => {
        dispatch(apiStatusFailure(err.message))
      })
  }
}

export const searchByArea = (area: string) => {
  return (dispatch: any) => {
    apiStatusStarted();
    axios.get(`${API_ENDPOINT}${API_SEARCH_BY_AREA}${area}`)
      .then((result: any) => {
        dispatch(searchByAreaSuccess(result.data.meals))
      })
      .catch(err => {
        dispatch(apiStatusFailure(err.message))
      })
  }
}

export const searchByCategory = (category: string) => {
  return (dispatch: any) => {
    apiStatusStarted();
    axios.get(`${API_ENDPOINT}${API_SEARCH_BY_CATEGORY}${category}`)
      .then((result: any) => {
        dispatch(searchByCategorySuccess(result.data.meals))
      })
      .catch(err => {
        dispatch(apiStatusFailure(err.message))
      })
  }
}

const searchDishSuccess = (dishList: any) => ({
  type: SEARCH_DISH_SUCCESS,
  payload: dishList
});

const getRandomDishesSuccess = (randomDishList: any) => ({
  type: GET_RANDOM_DISHES_SUCCESS,
  payload: randomDishList
});

const getCertainDishSuccess = (certainDish: any) => ({
  type: GET_CERTAIN_DISH_SUCCESS,
  payload: certainDish
})

const getCategoriesSuccess = (categoriesList: any) => ({
  type: GET_CATEGORIES,
  payload: categoriesList
})

const getAreaListSuccess = (areaList: any) => ({
  type: GET_AREA_LIST,
  payload: areaList
})

const searchByAreaSuccess = (dishByAreaList: any) => ({
  type: API_SEARCH_BY_AREA_SUCCESS,
  payload: dishByAreaList
})

const searchByCategorySuccess =(dishByCategoryList: any) => ({
  type: API_SEARCH_BY_CATEGORY_SUCCESS,
  payload: dishByCategoryList
})

const apiStatusStarted = () => ({
  type: API_STATUS_STARTED
});

const apiStatusFailure = (error: any) => ({
  type: API_STATUS_FAILURE,
  payload: error
});


