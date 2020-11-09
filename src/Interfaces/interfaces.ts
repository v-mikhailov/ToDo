import { CREATE_TASK, DELETE_TASK, CHANGE_TASK_TYPE, OPEN_TASK, CLOSE_TASK, CREATE_COLUMN, CHANGE_DESK_NAME } from '../Redux/constants';
import { rootReducer } from '../Redux/rootReducer';

export interface TaskInterface {
  title: string,
  descr: string,
  deadline: string,
  isUrgent: boolean,
  id: number,
  columnId: number
}

export interface ColumnInterface {
  title: string,
  id: number
}

export interface DeskInterface {
  title: string,
  id: number
}

interface CreateTaskAction {
  type: typeof CREATE_TASK,
  payload: TaskInterface
}

interface DeleteTaskAction {
  type: typeof DELETE_TASK,
  payload: number
}

interface ChangeTaskColumnAction {
  type: typeof CHANGE_TASK_TYPE,
  payload: {
    columnId: number,
    taskId: number
  }
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

interface CreateColumnAction {
  type: typeof CREATE_COLUMN,
  payload: ColumnInterface
}

interface ChangeDeskName {
  type: typeof CHANGE_DESK_NAME,
  payload: string
}

export type TaskActionInterfaces = CreateTaskAction | DeleteTaskAction | ChangeTaskColumnAction | OpenTaskAction | CloseTaskAction;
export type ColumnActionInterface = CreateColumnAction;
export type DeskActionInterface = ChangeDeskName;

export type RootState = ReturnType<typeof rootReducer>;

