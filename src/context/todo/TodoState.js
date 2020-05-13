import React, { useReducer } from 'react'
import { TodoContext } from './todoContext'
import { todoReducer } from './todoReducer'
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../types'

export const TodoState = ({ children }) => {

    const initialState = {
        todos: [{ id: '1', title: 'Hello useReduser' }]
    }

    const [state, dispatch] = useReducer(todoReducer, initialState)

    // @ts-ignore
    const addTodo = title => dispatch({ type: ADD_TODO, title })

    // @ts-ignore
    const removeTodo = id => dispatch({ type: REMOVE_TODO, id })

    // @ts-ignore
    const updateTodo = (id, title) => dispatch({ type: UPDATE_TODO, id, title })

    return (
        <TodoContext.Provider
            value={{
                todos: state.todos,
                addTodo,
                removeTodo,
                updateTodo
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}

