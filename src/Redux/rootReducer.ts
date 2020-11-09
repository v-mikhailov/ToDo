import { combineReducers } from 'redux';
import { tasksReducer } from './tasksReducer';
import { columnsReducer } from './columnsReducer';
import { desksReducer } from './desksReducder';

export const rootReducer = combineReducers({
  desks: desksReducer,
  tasks: tasksReducer,
  columns: columnsReducer
})