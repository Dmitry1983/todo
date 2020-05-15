import React, { useReducer, useContext } from 'react'
import { Alert } from 'react-native'
import { TodoContext } from './todoContext'
import { todoReducer } from './todoReducer'
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, SHOW_LOADER, HIDE_LOADER, SHOW_ERROR, CLEAR_ERROR, FETCH_TODOS } from '../types'
import { ScreenContext } from '../screen/screenContext'

const url = 'https://rn-todo-app-4c535.firebaseio.com/'

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
    const addTodo = async title => {
        const response = await fetch(url + 'todos.json', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title })
        })
        const data = await response.json()
        const id = data.name
        console.log('data: ', data.name)
        dispatch({ type: ADD_TODO, title, id })
    }

    const fetchTodos = async () => {
        const response = await fetch(url + 'todos.json', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        const data = await response.json()
        console.log('FETCH DATA: ', data)
        const todos = Object.keys(data).map(key => ({ ...data[key], id: key }))
        dispatch({ type: FETCH_TODOS, todos })
    }


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
                        // @ts-ignore
                        dispatch({ type: REMOVE_TODO, id })
                    }
                },
            ],
            { cancelable: false },
        );
    }

    // @ts-ignore
    const updateTodo = (id, title) => dispatch({ type: UPDATE_TODO, id, title })

    // @ts-ignore
    const showLoader = () => dispatch({ type: SHOW_LOADER })

    // @ts-ignore
    const hideLoader = () => dispatch({ type: HIDE_LOADER })

    // @ts-ignore
    const showError = (error) => dispatch({ type: SHOW_ERROR, error })

    // @ts-ignore
    const clearError = () => dispatch({ type: CLEAR_ERROR })

    return (
        <TodoContext.Provider
            value={{
                todos: state.todos,
                loading: state.loading,
                error: state.error,
                addTodo,
                removeTodo,
                updateTodo,
                fetchTodos
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}

