import { CREATE_TASK, DELETE_TASK, CHANGE_TASK_TYPE, OPEN_TASK, CLOSE_TASK } from '../Redux/constants';
import { rootReducer } from '../Redux/rootReducer';

export interface TaskInterface {
  title: string,
  descr: string,
  deadline: string,
  isUrgent: boolean,
  type: string,
  id: number
}

export interface ColumnInterface {
  title: string,
  type: string,
  id: number
}

// export interface DeskStateInterface {
//   tasks?: TaskInterface[],
//   columns?: ColumnInterface[]
// }

interface CreateTaskAction {
  type: typeof CREATE_TASK,
  payload: TaskInterface
}

interface DeleteTaskAction {
  type: typeof DELETE_TASK,
  payload: number
}

interface ChangeTaskTypeAction {
  type: typeof CHANGE_TASK_TYPE,
  payload: TaskInterface
}

interface OpenTaskAction {
  type: typeof OPEN_TASK,
  payload: TaskInterface
}

interface CloseTaskAction {
  type: typeof CLOSE_TASK,
  payload: {
    isOpen: boolean,
    task: null
  }
}

export type ColumnActionInterfaces = CreateTaskAction | DeleteTaskAction | ChangeTaskTypeAction | OpenTaskAction | CloseTaskAction;

export type RootState = ReturnType<typeof rootReducer>

