import React from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import { THEME } from '../theme'
import Icon from 'react-native-vector-icons/FontAwesome';


export const Navbar = (props) => {  //(props)  => ({title})
    const myIcon = <Icon
        name="check-circle"
        size={30}
        color={Platform.OS === 'android' ? THEME.COLOR.GREY : THEME.COLOR.MAIN}
    />;
    return (
        <View style={{
            ...styles.navbar, ...Platform.select({
                ios: styles.navBarIos,
                android: styles.navBarAndroid,

            })
        }}
        >
            <Text style={styles.text}>{myIcon}  {props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 10,
    },
    navBarAndroid: {
        backgroundColor: THEME.COLOR.MAIN,
    },
    navBarIos: {
        backgroundColor: 'white',
        borderBottomColor: THEME.COLOR.MAIN,
        borderBottomWidth: 1,
    },
    text: {
        color: Platform.OS === 'ios' ? THEME.COLOR.MAIN : 'white',
        fontSize: 20,

    },
})