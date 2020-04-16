import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


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
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 10,
    },
    text: {
        color: 'white',
        fontSize: 20,

    },
})