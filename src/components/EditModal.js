import React from 'react'
import { View, Text, StyleSheet, Button, TextInput, Modal } from 'react-native'
import { THEME } from '../theme'

export const EditModal = ({ visible, onCencel }) => {


    return (
        <Modal visible={visible} animationType='slide' transparent={false} >
            <View style={styles.wrap}>
                <TextInput style={styles.input}
                    placeholder='Input new todo'
                    autoCapitalize='none'
                    autoCorrect={false}
                    maxLength={64}
                />
                <View style={styles.buttons}>
                    <Button title="Cencel" onPress={onCencel} color={THEME.COLOR.GREY} />
                    <Button title="Save" onPress={() => { }} color={THEME.COLOR.MAIN} />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 10,
        borderColor: 'grey',
        borderBottomWidth: 1,
        width: '80%'
    },
    wrap: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    buttons: {
        marginTop: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',

    }
})