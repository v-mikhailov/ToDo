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