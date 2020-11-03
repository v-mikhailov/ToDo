const initialState = {
  columns: [
    {
      title: 'To Do',
      type: "todo",
      id: 1
    },
    {
      title: 'In progress',
      type: 'inpogress',
      id: 2
    },
    {
      title: 'Done', 
      type: 'done', 
      id: 3
    }
  ]
}

export const columnsReducer = (state = initialState, action: any) => {
  return state
}