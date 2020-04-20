import React from 'react'
import { StyleSheet, View } from 'react-native'

export const AppCard = props => (

    <View style={{ ...styles.default, ...props.style }}>
        {props.children}

    </View>
)

const styles = StyleSheet.create({
    default: {

        borderWidth: 1,
        borderColor: 'grey',
        padding: 20,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',

        shadowColor: 'black',                   //  shadow ios
        shadowRadius: 10,                       //  shadow ios
        shadowOpacity: 0.3,                     //  shadow ios
        shadowOffset: { width: 2, height: 2 },  //  shadow ios
        elevation: 8,                           // shadow Android



    }
})