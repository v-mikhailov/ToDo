import { SEARCH_DISH_FAILURE, SEARCH_DISH_STARTED, SEARCH_DISH_SUCCESS } from "./apiConstants"

// написать интерфейс
const initialState = {
  loading: false,
  isComplete: false,
  error: null,
  dishes: []
}


export const dishesReducer = (state = initialState , action : any) => {
  switch (action.type) {
    case SEARCH_DISH_STARTED: {
      return {
        ...state,
        loading: true,
        isComplete: false
      };
    }
    case SEARCH_DISH_SUCCESS: {
      return {
        ...state,
        loading: false,
        isComplete: true,
        error: null,
        dishes: action.payload
      }
    }
    case SEARCH_DISH_FAILURE: {
      return {
        ...state,
        loading: false,
        isComplete: false,
        error: action.payload
      }
    }
    
    default: return state
  }
}