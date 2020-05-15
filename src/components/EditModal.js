import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput, Modal, Alert } from 'react-native'
import { THEME } from '../theme'

export const EditModal = ({ visible, onCencel, value, onSave }) => {
    const [title, setTitle] = useState(value)

    const saveHandler = () => {
        if (title.trim().length < 3) {
            Alert.alert('Error length', 'Min 3 leters')
        } else {
            onSave(title)
        }
    }

    const cencelHandler = () => {
        setTitle(value)
        onCencel()
    }

    return (
        <Modal
            visible={visible}
            animationType='slide'
            transparent={false} >
            <View style={styles.wrap}>
                <TextInput style={styles.input}
                    value={title}
                    onChangeText={setTitle}
                    placeholder='Input new todo'
                    autoCapitalize='none'
                    autoCorrect={false}
                    maxLength={64}

                />
                <View style={styles.buttons}>
                    <Button title="Cencel" onPress={cencelHandler} color={THEME.COLOR.GREY} />
                    <Button title="Save" onPress={saveHandler} color={THEME.COLOR.MAIN} />
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