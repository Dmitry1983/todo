import React, { useState } from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { THEME } from '../theme'
import { AppCard } from '../components/ui/AppCard'
import { EditModal } from '../components/EditModal'

export const TodoScreen = ({ goBack, todo, onRemove }) => {
    const [modal, setModal] = useState(false)

    return (
        <View style={styles.container}>
            <EditModal visible={modal} onCencel={() => setModal(false)} />

            <AppCard style={styles.card}>
                <Text style={styles.title}>{todo.title}</Text>
                <Button title='EDIT' onPress={() => setModal(true)} />
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title="Back" color={THEME.COLOR.GREY} onPress={goBack} />
                </View>
                <View style={styles.button}>
                    <Button title="Remove" color={THEME.COLOR.DANGER} onPress={() => onRemove(todo.id)} />
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

    },
    title: {
        fontSize: 26,
    },
    card: {
        padding: 40,
        margin: 25
    }

})