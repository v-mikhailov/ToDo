import { CREATE_TASK, DELETE_TASK, CHANGE_TASK_TYPE, OPEN_TASK, CLOSE_TASK } from "./constants";
import {  TaskInterface, ColumnActionInterfaces } from '../Interfaces/interfaces';

export const createTask = (task: TaskInterface): ColumnActionInterfaces => {
  return {
    type: CREATE_TASK,
    payload: task
  }
}

export const deleteTask = (taskId: number): ColumnActionInterfaces => {
  return {
    type: DELETE_TASK,
    payload: taskId
  }
}

export const changeTaskType = (task: TaskInterface): ColumnActionInterfaces => {
  return {
    type: CHANGE_TASK_TYPE,
    payload: task
  }
}

export const openTask = (task: TaskInterface): ColumnActionInterfaces => {
  return {
    type: OPEN_TASK,
    payload: task
  }
}

export const closeTask = (): ColumnActionInterfaces => {
  return {
    type: CLOSE_TASK,
    payload: {
      isOpen: false,
      task: null
    }
  }
}
