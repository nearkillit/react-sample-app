export const ADDTODO  = 'ADD_TODO'
export const DELETETODO  = 'DELETE_TODO'
export const EDITTODO  = 'EDIT_TODO'

export const addTodo = (todo) => ({
    type: ADDTODO,
    todo
})

export const deleteTodo = (id) => ({
    type: DELETETODO,
    id
})

export const editTodo = (todo) => ({
    type: EDITTODO,    
    todo
})