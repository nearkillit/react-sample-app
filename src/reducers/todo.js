import { ADDTODO, DELETETODO, EDITTODO } from "../actions"

const initialState = {
    todos:[] // id, ticket, detail, pic, deadline, startdate
}

export default(state = initialState, action) => {
    switch (action.type){
      case ADDTODO:
        const id = state.todos.reduce((a,c) => c.id > a ? c.id : a ,0) + 1
        const todo = Object.assign(action.todo, {id})        
        return { 
          todos: [ ...state.todos, todo  ]              
        };
      case DELETETODO:
        return { 
          todos: state.todos.filter( t => t.id !== action.id )
        };
      case EDITTODO:              
        return { 
          todos: state.todos.map( t => t.id == action.todo.id ? action.todo  : t )
        };
      default:
        return state;
    }
  };