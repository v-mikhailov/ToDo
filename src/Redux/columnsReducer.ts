import { ColumnActionInterface } from '../Interfaces/interfaces';
import { CREATE_COLUMN } from './constants';

const initialState = {
  columns: [
    {
      title: 'To Do',
      id: 1
    },
    {
      title: 'In progress',
      id: 2
    },
    {
      title: 'Done', 
      id: 3
    }
  ]
}

export const columnsReducer = (state = initialState, action: ColumnActionInterface) => {
  switch(action.type) {
    case CREATE_COLUMN: {
      return {...state, columns: state.columns.concat(action.payload)}
    }

    default: return state
  }
}