import React, { useState, useEffect, useContext, useCallback } from 'react'
import { View, StyleSheet, FlatList, Image, Dimensions } from 'react-native'
import { AddTodo } from '../components/AddTodo';
import { Todo } from '../components/Todo';
import { THEME } from '../theme'
import { TodoContext } from '../context/todo/todoContext';
import { ScreenContext } from '../context/screen/screenContext';

export const MainScreen = () => {
    const { addTodo, todos, removeTodo, fetchTodos, loading, error } = useContext(TodoContext)
    const { changeScreen } = useContext(ScreenContext)

    const [diviseWidth, setDeviceWidth] = useState(
        Dimensions.get('window').width - THEME.PADDING.HORIZONTAL * 2
    )

    const loadTodos = useCallback(async () => await fetchTodos(), [fetchTodos])

    useEffect(() => {
        loadTodos()
    }, [])

    useEffect(() => {
        const update = () => {
            const newWidth = Dimensions.get('window').width - THEME.PADDING.HORIZONTAL * 2
            setDeviceWidth(newWidth)
        }
        Dimensions.addEventListener('change', update)

        return () => {
            Dimensions.removeEventListener('change', update)
        }
    })



    let content = (
        <View style={{ width: diviseWidth }}>
            <FlatList
                data={todos}
                renderItem={({ item }) => (<Todo todo={item} onRemove={removeTodo} onOpen={changeScreen} />)}
                keyExtractor={item => item.id.toString()} //.toString()} переводим в стринг на всякий случай
            />
        </View>

    )

    if (todos.length === 0) {
        content =
            <View style={styles.imageWrap}>
                <Image
                    // @ts-ignore
                    source={require('../../assets/no-items.png')}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode='contain'

                />
            </View>
    }


    return (
        <View style={styles.container}>
            <AddTodo onSubmit={addTodo} />
            {content}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    imageWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        height: 400,
    }
})