import { CREATE_TASK, DELETE_TASK, CHANGE_TASK_TYPE } from "./types";
import {  TaskInterface } from '../Interfaces/interfaces';

export const createTask = (task: any) => {
  return {
    type: CREATE_TASK,
    payload: task
  }
}

export const deleteTask = (task: TaskInterface) => {
  return {
    type: DELETE_TASK,
    payload: task
  }
}

export const changeTaskType = (task: TaskInterface) => {
  return {
    type: CHANGE_TASK_TYPE,
    payload: task
  }
}