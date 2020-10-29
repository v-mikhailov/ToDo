const initialState = {
  columns: [
    {
      title: 'To Do',
      type: "new",
      id: 1
    },
    {
      title: 'In progress',
      type: 'inProgress',
      id: 2
    },
    {
      title: 'Done', 
      type: 'isCompleted', 
      id: 3
    }
  ]
}

export const columnsReducer = (state = initialState, action: any) => {
  return state
}