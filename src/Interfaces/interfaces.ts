import { CREATE_TASK, DELETE_TASK, CHANGE_TASK_TYPE } from '../Redux/constants';
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

export type ColumnActionInterfaces = CreateTaskAction | DeleteTaskAction | ChangeTaskTypeAction

export type RootState = ReturnType<typeof rootReducer>

