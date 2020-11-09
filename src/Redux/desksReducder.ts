import { DeskActionInterface } from '../Interfaces/interfaces';
import {  CHANGE_DESK_NAME } from './constants';
const initialState = {
  desks: [
    {
      title: 'Desk 1',
      deskId: 1
    },
  ]
}

export const desksReducer = (state = initialState, action: DeskActionInterface) => {
  switch(action.type) {
    case CHANGE_DESK_NAME: {
      const newState = {
        title: action.payload,
        deskId: state.desks[0].deskId
      }
      console.log('new',newState);
      return { ...state, desks: newState }
    }
    default: return  state
  }
}