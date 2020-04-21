import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button, Alert, Keyboard } from 'react-native'
import { THEME } from '../theme'

export const AddTodo = ({ onSubmit }) => {

    const [value, setValue] = useState('')

    const pressHendler = () => {
        //onSubmit('Test todo')
        if (value.trim()) {
            onSubmit(value)
            setValue('')
            Keyboard.dismiss() // скрыть клавиатуру
        } else {
            console.log('error, empty TextInput')
            Alert.alert('error, empty TextInput')
        }
    }
    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                placeholder="Input new to-do..."
                onChangeText={setValue}//{text => setValue(text)}
                value={value}
                autoCorrect={false}
                autoCapitalize='none'
            //keyboardType='number-pad'
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
        borderBottomColor: THEME.COLOR.MAIN,
        padding: 10,
        fontFamily: THEME.FONT.R_REG,
    },

})
