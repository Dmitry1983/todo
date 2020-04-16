import React from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'
import { AddTodo } from '../components/AddTodo';
import { Todo } from '../components/Todo';

export const MainScreen = ({ addTodo, todos, removeTodo }) => {
    return (
        <View style={styles.container}>
            <AddTodo onSubmit={addTodo} />

            <FlatList
                data={todos}
                renderItem={({ item }) => (<Todo todo={item} onRemove={removeTodo} />)}
                keyExtractor={item => item.id.toString()} //.toString()} переводим в стринг на всякий случай
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})