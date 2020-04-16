import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

export const TodoScreen = ({ goBack, todo }) => {
    return (
        <View style={styles.container}>
            <Text>{todo.title}</Text>
            <Button title="Back" onPress={goBack} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})