import { combineReducers } from 'redux';
import { tasksReducer } from './tasksReducer';
import { columnsReducer } from './columnsReducer';
import { desksReducer } from './desksReducder';
import { dishesReducer } from './API/dishesReducer';

export const rootReducer = combineReducers({
  desks: desksReducer,
  tasks: tasksReducer,
  columns: columnsReducer,
  dishes: dishesReducer
})

export type RootState = ReturnType<typeof rootReducer>