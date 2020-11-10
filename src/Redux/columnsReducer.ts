import { ColumnActionInterface } from '../Interfaces/interfaces';
import { CREATE_COLUMN } from './constants';

const initialState = {
  columns: [
    {
      title: 'To Do',
      id: 1,
      deskId: 0
    },
    {
      title: 'In progress',
      id: 2,
      deskId: 0
    },
    {
      title: 'Done', 
      id: 3,
      deskId: 0
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