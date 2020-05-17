import React, { useState, useContext } from 'react'
import { View, StyleSheet, Text, Button, Dimensions } from 'react-native'
import { THEME } from '../theme'
import { AppCard } from '../components/ui/AppCard'
import { EditModal } from '../components/EditModal'
import { TodoContext } from '../context/todo/todoContext'
import { ScreenContext } from '../context/screen/screenContext'

export const TodoScreen = () => {

    const { todos, updateTodo, removeTodo } = useContext(TodoContext)
    const { todoId, changeScreen } = useContext(ScreenContext)
    const [modal, setModal] = useState(false)

    const todo = todos.find(t => t.id === todoId)

    const saveHandler = async title => {
        await updateTodo(todo.id, title)
        setModal(false)
    }

    return (
        <View style={styles.container}>
            <EditModal
                value={todo.title}
                visible={modal}
                onCencel={() => setModal(false)}
                onSave={saveHandler}
            />

            <AppCard style={styles.card}>
                <Text style={styles.title}>{todo.title}</Text>
                <Button title='EDIT' onPress={() => setModal(true)} />
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button
                        title="Back"
                        color={THEME.COLOR.GREY}
                        onPress={() => changeScreen(null)} />
                </View>
                <View style={styles.button}>
                    <Button
                        title="Remove"
                        color={THEME.COLOR.DANGER}
                        onPress={() => removeTodo(todo.id)} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        // width: Dimensions.get('window').width / 3
        width: Dimensions.get('window').width > 400 ? 150 : 100
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    container: {

    },
    title: {
        fontSize: 26,
    },
    card: {
        padding: 40,
        margin: 25
    }

})