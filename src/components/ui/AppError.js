import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { THEME } from '../../theme'

const AppError = ({ error, onPress }) => {
    const { view, text } = styles
    return (
        <View style={view}>
            <Text style={text}>{error}</Text>
            <Button title='Re Connect' onPress={onPress} />
        </View>
    )
}

export default AppError

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20,
        color: THEME.COLOR.MAIN,

    }
})