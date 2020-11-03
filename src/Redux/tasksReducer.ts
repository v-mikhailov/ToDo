import { CREATE_TASK, DELETE_TASK, CHANGE_TASK_TYPE, OPEN_TASK, CLOSE_TASK } from './constants';
import { TaskInterface, ColumnActionInterfaces } from '../Interfaces/interfaces';

interface initialState {
  tasks: TaskInterface[],
  openedTask: {
    isOpen: boolean,
    task: TaskInterface | null
  }
}

const initialState: initialState = {
  tasks: [],
  openedTask: {
    isOpen: false,
    task: null
  }
}

export const tasksReducer = (state = initialState, action: ColumnActionInterfaces) => {
  switch(action.type) {
    case CREATE_TASK: {
      return { ...state, tasks: state.tasks.concat(action.payload)}
    }
    case DELETE_TASK: {
      return { 
        ...state, 
        tasks: state.tasks.filter((task: TaskInterface) => task.id !== action.payload),
        openedTask: {
          isOpen: false,
          task: null
        }
      }
    }
    case CHANGE_TASK_TYPE: {
      const newState = state.tasks.map((task: TaskInterface) => {
        if (task.id === action.payload.id) {
          return task.type = action.payload.type
        } 
        return task
      })
      return {...state, tasks: newState}
    }
    case OPEN_TASK: {
      const newOpendTask = {
        isOpen: true,
        task: action.payload
      }
      return {...state, openedTask: newOpendTask}
    }
    case CLOSE_TASK: {
      return {...state, openedTask: action.payload}
    }

    default: return  state
  }
}