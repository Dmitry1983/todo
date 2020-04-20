import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { THEME } from '../theme'


export const Navbar = (props) => {  //(props)  => ({title})
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        backgroundColor: THEME.COLOR.MAIN,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 10,
    },
    text: {
        color: 'white',
        fontSize: 20,

    },
})