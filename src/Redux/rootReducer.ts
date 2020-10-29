import { combineReducers } from 'redux';
import { tasksReducer } from './tasksReducer';
import { columnsReducer } from './columnsReducer';

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  columns: columnsReducer
})