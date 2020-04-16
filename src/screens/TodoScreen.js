import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { THEME } from '../theme'

export const TodoScreen = ({ goBack, todo }) => {
    return (
        <View style={styles.container}>
            <Text>{todo.title}</Text>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title="Back" color={THEME.GREY_COLOR} onPress={goBack} />
                </View>
                <View style={styles.button}>
                    <Button title="Remove" color={THEME.DANGER_COLOR} onPress={() => console.log('to remove')} />
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '30%',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    container: {

    }
})