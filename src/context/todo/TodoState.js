import React, { useReducer, useContext } from 'react'
import { Alert } from 'react-native'
import { TodoContext } from './todoContext'
import { todoReducer } from './todoReducer'
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, SHOW_LOADER, HIDE_LOADER, SHOW_ERROR, CLEAR_ERROR } from '../types'
import { ScreenContext } from '../screen/screenContext'

export const TodoState = ({ children }) => {

    const initialState = {
        // todos: [
        //     { id: '1', title: 'Hello useReduser' },
        //     { id: '2', title: 'Hello 2 useReduser' }
        // ]

        todos: [],
        loading: false,
        error: null
    }

    const { changeScreen } = useContext(ScreenContext)
    const [state, dispatch] = useReducer(todoReducer, initialState)


    // @ts-ignore
    const addTodo = title => dispatch({ type: ADD_TODO, title })


    const removeTodo = id => {
        const todo = state.todos.find(t => t.id === id)
        Alert.alert(
            'Delete todo element',
            `Do you want delete "${todo.title}" ?`,
            [
                {
                    text: 'Cancel',
                    // onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'Delet',
                    style: 'destructive',
                    onPress: () => {
                        changeScreen(null)
                        dispatch({ type: REMOVE_TODO, id })
                    }
                },
            ],
            { cancelable: false },
        );
    }

    // @ts-ignore
    const updateTodo = (id, title) => dispatch({ type: UPDATE_TODO, id, title })

    const showLoader = () => dispatch({ type: SHOW_LOADER })

    const hideLoader = () => dispatch({ type: HIDE_LOADER })

    const showError = (error) => dispatch({ type: SHOW_ERROR, error })

    const clearError = () => dispatch({ type: CLEAR_ERROR })

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

