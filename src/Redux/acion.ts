import { CREATE_TASK, DELETE_TASK } from "./types";

export const createTask = (task: any) => {
  return {
    type: CREATE_TASK,
    payload: task
  }
}

export const deleteTask = (task: any) => {
  return {
    type: DELETE_TASK,
    payload: task
  }
}