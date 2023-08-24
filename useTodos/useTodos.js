import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';



const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {
  
    const [ todos, dispatch ] = useReducer( todoReducer, [], init );

   useEffect(() => {
     localStorage.setItem('todos', JSON.stringify( todos ) );
   }, [todos])
   

    const handleNewTodo = ( todo ) => {
        //console.log({ todo });
        const action = {
            type:'[TODO] Add TODO',
            payload: todo
        }

        dispatch( action );
    }

    const handleDeleteTodo = ( id ) => {
        
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    const handToggleTodo = ( id ) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }

    return{
        
        todos,

        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo=> !todo.done).length,

        handleDeleteTodo, 
        handToggleTodo, 
        handleNewTodo
    }

}
