import { DeskActionInterface } from '../Interfaces/interfaces';
import { CREATE_DESK_NAME } from './constants';
const initialState = {
  desks: [
    {
      title: 'Desk 1',
      deskId: 1
    }
  ]
}

export const desksReducer = (state = initialState, action: DeskActionInterface) => {
  switch(action.type) {
    case CREATE_DESK_NAME: {
      /// другой метод поиска
      return { ...state, desks: state.desks[0].title = action.payload }
    }
    default: return  state
  }
}