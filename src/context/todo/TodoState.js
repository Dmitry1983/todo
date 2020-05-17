import React, { useReducer, useContext } from 'react'
import { Alert } from 'react-native'
import { TodoContext } from './todoContext'
import { todoReducer } from './todoReducer'
import {
    ADD_TODO,
    REMOVE_TODO,
    UPDATE_TODO,
    SHOW_LOADER,
    HIDE_LOADER,
    SHOW_ERROR,
    CLEAR_ERROR,
    FETCH_TODOS
} from '../types'
import { ScreenContext } from '../screen/screenContext'
import { Http } from '..//../http'

//------------ URL
const url = 'https://rn-todo-app-4c535.firebaseio.com/'

function nameBase(url, id = '') {
    return url + `todos/${id}.json`
}
//------------ URL

export const TodoState = ({ children }) => {

    const initialState = {
        todos: [],
        loading: false,
        error: null
    }

    const { changeScreen } = useContext(ScreenContext)
    const [state, dispatch] = useReducer(todoReducer, initialState)



    const addTodo = async title => {
        clearError()
        showLoader()
        try {
            const data = await Http.post(nameBase(url), { title })
            const id = data.name
            // @ts-ignore
            dispatch({ type: ADD_TODO, title, id })
        } catch (error) {
            showError('Error on add todo...')
            console.log('error add : ', error)
        }
        hideLoader()

    }

    const fetchTodos = async () => {
        showLoader()
        clearError()
        let allData = undefined
        try {
            const data = await Http.get(nameBase(url))
            if (data === null) { allData = null }
            const todos = Object.keys(data).map(key => ({ ...data[key], id: key }))
            //@ts-ignore
            dispatch({ type: FETCH_TODOS, todos })
        } catch (error) {
            if (allData !== null) { showError('Error on connect...') }
            allData = undefined
        }
        hideLoader()

    }


    const removeTodo = id => {
        const todo = state.todos.find(t => t.id === id)
        Alert.alert(
            'Delete todo element',
            `Do you want delete "${todo.title}" ?`,
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: async () => {
                        changeScreen(null)
                        showLoader()
                        clearError()
                        try {
                            await Http.delete(nameBase(url, id))
                        } catch (error) {
                            showError('Error to delete this one todo...')
                        } finally {
                            // @ts-ignore
                            dispatch({ type: REMOVE_TODO, id })
                        }
                        hideLoader()
                    }
                },
            ],
            { cancelable: false },
        );
    }

    const updateTodo = async (id, title) => {
        clearError()
        showLoader()
        try {
            await Http.patch(nameBase(url, id), { title })
        } catch (error) {
            showError('Error to update database...')
        } finally {
            // @ts-ignore
            dispatch({ type: UPDATE_TODO, id, title })
        }
        hideLoader()
    }

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