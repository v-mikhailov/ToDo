import { API_STATUS_FAILURE, API_STATUS_STARTED, GET_CERTAIN_DISH_SUCCESS, GET_RANDOM_DISHES_SUCCESS, SEARCH_DISH_SUCCESS, GET_CATEGORIES, GET_AREA_LIST, API_SEARCH_BY_AREA_SUCCESS, API_SEARCH_BY_CATEGORY_SUCCESS } from "./apiConstants"
import { DishActionInterfaces, DishInterface, CategoryInterface } from '../../Interfaces/apiInterfaces';


interface initialState {
  loading: boolean,
  error: any,
  dishes: DishInterface[],
  randomDishes: DishInterface[],
  certainDish: any,
  categories:  CategoryInterface[],
  areaList:  string[],
  dishesByCategory:  DishInterface[],
  dishesByArea:  DishInterface[]
}

const initialState : initialState = {
  loading: false,
  error: null,
  dishes: [],
  randomDishes: [],
  certainDish: {},
  categories: [],
  areaList: [],
  dishesByCategory: [],
  dishesByArea: []
}

export const dishesReducer = (state = initialState , action: DishActionInterfaces) => {
  switch (action.type) {
    case API_STATUS_STARTED: {
      return {
        ...state,
        loading: true,
      };
    }
    case SEARCH_DISH_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        randomDishes: [],
        dishesByArea: [],
        dishesByCategory: [],
        dishes: action.payload,
      }
    }
    case GET_RANDOM_DISHES_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        dishes: [],
        dishesByCategory: [],
        dishesByArea: [],
        certainDish: {},
        randomDishes: action.payload
      }
    }
    case GET_CERTAIN_DISH_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        certainDish: action.payload
      }
    }
    case GET_CATEGORIES: {     
      return {
        ...state,
        categories: action.payload,
        error: null,
      }
    }
    case GET_AREA_LIST: {
      return {
        ...state,
        areaList: action.payload,
        error: null
      }
    }
    case API_STATUS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    }
    case API_SEARCH_BY_AREA_SUCCESS: {
      return {
        ...state,
        error: null,
        loading: false,
        dishes: [],
        certainDish: {},
        dishesByCategory: [],
        randomDishes: [],
        dishesByArea: action.payload
      }
    }
    case API_SEARCH_BY_CATEGORY_SUCCESS: {
      return {
        ...state,
        error: null,
        loading: false,
        dishes: [],
        certainDish: {},
        randomDishes: [],
        dishesByArea: [],
        dishesByCategory: action.payload
      }
    }
    
    default: return state
  }
}