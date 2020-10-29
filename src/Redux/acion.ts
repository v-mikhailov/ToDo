import { CREATE_TASK, DELETE_TASK, CHANGE_TASK_TYPE } from "./constants";
import {  TaskInterface, ColumnActionInterfaces } from '../Interfaces/interfaces';

export const createTask = (task: TaskInterface): ColumnActionInterfaces => {
  return {
    type: CREATE_TASK,
    payload: task
  }
}

export const deleteTask = (task: TaskInterface): ColumnActionInterfaces => {
  return {
    type: DELETE_TASK,
    payload: task.id
  }
}

export const changeTaskType = (task: TaskInterface): ColumnActionInterfaces => {
  return {
    type: CHANGE_TASK_TYPE,
    payload: task
  }
}
