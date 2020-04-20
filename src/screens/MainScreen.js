import React from 'react'
import { View, StyleSheet, Text, FlatList, Image } from 'react-native'
import { AddTodo } from '../components/AddTodo';
import { Todo } from '../components/Todo';

export const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {
    let content = (
        <FlatList
            data={todos}
            renderItem={({ item }) => (<Todo todo={item} onRemove={removeTodo} onOpen={openTodo} />)}
            keyExtractor={item => item.id.toString()} //.toString()} переводим в стринг на всякий случай
        />
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