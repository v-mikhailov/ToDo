import { CREATE_TASK, DELETE_TASK, CHANGE_TASK_TYPE, OPEN_TASK, CLOSE_TASK, CREATE_COLUMN } from "./constants";
import {  TaskInterface, TaskActionInterfaces, ColumnInterface } from '../Interfaces/interfaces';

export const createTask = (task: TaskInterface): TaskActionInterfaces => {
  return {
    type: CREATE_TASK,
    payload: task
  }
}

export const deleteTask = (taskId: number): TaskActionInterfaces => {
  return {
    type: DELETE_TASK,
    payload: taskId
  }
}

export const changeTaskColumn = (columnId: number, taskId: number): TaskActionInterfaces => {
  return {
    type: CHANGE_TASK_TYPE,
    payload: {
      columnId: columnId,
      taskId: taskId
    }
  }
}

export const openTask = (task: TaskInterface): TaskActionInterfaces => {
  return {
    type: OPEN_TASK,
    payload: task
  }
}

export const closeTask = (): TaskActionInterfaces => {
  return {
    type: CLOSE_TASK,
    payload: {
      isOpen: false,
      task: null
    }
  }
}

export const createColumn = (column: ColumnInterface) => {
  return {
    type: CREATE_COLUMN,
    payload: column
  }
}
