import { createStore } from 'redux';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':            
      return { 
        todos: [ ...state.todos, 
            { todo: action.todo, 
              id: state.todos.reduce((a,c) => c.id > a ? c.id : a ,0) + 1
            }]
      };
    case 'DELETE_TODO':
      return { 
        todos: state.todos.filter( t => t.id !== action.id )
      };
    default:
      return state;
  }
};

const initialState = {
    todos:[]
}

const store = createStore(reducer);

export default store;