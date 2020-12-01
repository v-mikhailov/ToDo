import { GET_CERTAIN_DISH_SUCCESS, GET_RANDOM_DISHES_SUCCESS, SEARCH_DISH_SUCCESS, GET_CATEGORIES, GET_AREA_LIST, API_SEARCH_BY_AREA_SUCCESS, API_SEARCH_BY_CATEGORY_SUCCESS, API_STATUS_STARTED, API_STATUS_FAILURE } from '../Redux/API/apiConstants';

type recipe = string;

export interface DishInterface {
  idMeal: string,
  strArea: string,
  strMeal: string,
  strCategory: string,
  strMealThumb: string,
  strInstructions? : recipe,
  ingridients? : string[]
}

interface SearchDishSuccessAction {
  type: typeof SEARCH_DISH_SUCCESS,
  payload: DishInterface[]
}

interface GetRandomDishesSuccessAction {
  type: typeof GET_RANDOM_DISHES_SUCCESS,
  payload:  DishInterface[]
}

interface GetCertainDishSuccessAction {
  type: typeof GET_CERTAIN_DISH_SUCCESS,
  payload: DishInterface
}

interface GetCategoriesSuccessAction {
  type: typeof GET_CATEGORIES,
  payload: string[]
}

interface GetAreaListSuccessAction {
  type: typeof GET_AREA_LIST,
  payload: string[]
}

interface SearchByAreaSuccessAction {
  type: typeof API_SEARCH_BY_AREA_SUCCESS,
  payload: DishInterface[]
}

interface SearchByCategorySuccessAction {
  type: typeof API_SEARCH_BY_CATEGORY_SUCCESS,
  payload: DishInterface[]
}

interface ApiStatusStartedAction {
  type: typeof API_STATUS_STARTED
}

interface ApiStatusFailureAction {
  type: typeof API_STATUS_FAILURE,
  payload: any
}

export type DishActionInterfaces = SearchDishSuccessAction | GetRandomDishesSuccessAction | GetCertainDishSuccessAction | GetCategoriesSuccessAction | GetAreaListSuccessAction | SearchByAreaSuccessAction | SearchByCategorySuccessAction | ApiStatusStartedAction | ApiStatusFailureAction;
