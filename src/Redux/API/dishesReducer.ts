import { API_STATUS_FAILURE, API_STATUS_STARTED, GET_CERTAIN_DISH_SUCCESS, GET_RANDOM_DISHES_SUCCESS, SEARCH_DISH_SUCCESS } from "./apiConstants"

// почему с интерфейсом появляются ошибки?

// interface initialState {
//   loading: boolean,
//   error: any,
//   dishes: [],
//   randomDishes: [],
//   certainDish: {}
// }

const initialState = {
  loading: false,
  error: null,
  dishes: [],
  randomDishes: [],
  certainDish: {},
}

export const dishesReducer = (state = initialState , action : any) => {
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
        dishes: action.payload,
        randomDishes: []
      }
    }
    case GET_RANDOM_DISHES_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        dishes: [],
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
    case API_STATUS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    }
    
    default: return state
  }
}