import { CREATE_TASK, DELETE_TASK } from './types';
import { TaskInterface } from '../Interfaces/interfaces';

interface initialState {
  tasks: TaskInterface[]
}

const initialState: initialState = {
  tasks: []
}

export const tasksReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case CREATE_TASK: {
      return { ...state, tasks: state.tasks.concat(action.payload)}
    }
    case DELETE_TASK: {
      return { ...state, tasks: state.tasks.filter((task: any) => task.id !== action.payload.id)}
    }

    default: return  state
  }
}