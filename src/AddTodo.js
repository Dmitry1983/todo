import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button } from 'react-native'

export const AddTodo = ({ onSubmit }) => {

    const [value, setValue] = useState([])

    const pressHendler = () => {
        onSubmit('Test todo')
    }
    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                placeholder="Input new to-do"
            />
            <Button
                title=" Add "
                onPress={pressHendler}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,

    },
    input: {
        width: '80%',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        padding: 10,
    },

})
