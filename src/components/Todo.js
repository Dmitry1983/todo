import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export const Todo = ({ todo, onRemove, onOpen }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.4}
            //onPress={() => console.log('Pressed id : ' + todo.id)}
            onPress={() => (onOpen(todo.id))}
            //onLongPress={() => console.log('Pressed long id : ' + todo.id)}
            //onLongPress={() => onRemove(todo.id)}
            //onLongPress={longPressHeandler}
            onLongPress={onRemove.bind(null, todo.id)}


        >
            <View style={styles.todo}>
                <Text> {todo.title} </Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        marginBottom: 10,
    }
})