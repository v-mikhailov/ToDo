import { CREATE_TASK, DELETE_TASK, CHANGE_TASK_TYPE } from './constants';
import { TaskInterface, ColumnActionInterfaces } from '../Interfaces/interfaces';

interface initialState {
  tasks: TaskInterface[]
}

const initialState: initialState = {
  tasks: []
}

export const tasksReducer = (state = initialState, action: ColumnActionInterfaces) => {
  switch(action.type) {
    case CREATE_TASK: {
      return { ...state, tasks: state.tasks.concat(action.payload)}
    }
    case DELETE_TASK: {
      return { ...state, tasks: state.tasks.filter((task: TaskInterface) => task.id !== action.payload)}
    }
    case CHANGE_TASK_TYPE: {
      const newState = state.tasks.map((task: TaskInterface) => {
        if (task.id === action.payload.id) {
            if (action.payload.type === 'new') {
              task.type = 'inProgress';
              return task
            }
            if (action.payload.type === 'inProgress') {
              task.type = 'isCompleted';
              return task
            }
        } 
        return task
      })
      return {...state, tasks: newState}
    }

    default: return  state
  }
}