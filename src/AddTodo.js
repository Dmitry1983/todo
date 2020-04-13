import React, { Component } from 'react'
import { View, StyleSheet, TextInput, Button } from 'react-native'

export const AddTodo = props => {
    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                placeholder="Input new to-do"
            />
            <Button

                title="Add"
            />
        </View>
    )

}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    input: {
        width: '80%',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        padding: 10,
    },

})
