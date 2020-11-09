import { DeskActionInterface, DeskInterface } from '../Interfaces/interfaces';
import {  CHANGE_DESK_NAME } from './constants';

interface initialState {
  desks: DeskInterface[]
}
const initialState = {
  desks: [
    {
      title: 'Desk 1',
      id: 1
    },
    {
      title: 'Desk 2',
      id: 2
    },
    {
      title: 'Desk 3',
      id: 3
    },
  ]
}

export const desksReducer = (state = initialState, action: DeskActionInterface) => {
  switch(action.type) {
    case CHANGE_DESK_NAME: {
      const newState = state.desks.map((desk: DeskInterface) => {
        if (desk.id === action.payload.id) {
          desk.title = action.payload.title
          return desk
        }
        return desk
      })
      return { ...state, desks: newState}
    }
    default: return  state
  }
}