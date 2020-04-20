import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { THEME } from '../theme'
import Icon from 'react-native-vector-icons/FontAwesome';


export const Navbar = (props) => {  //(props)  => ({title})
    const myIcon = <Icon name="check-circle" size={30} color={THEME.COLOR.GREY} />;
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{myIcon}  {props.title}</Text>
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