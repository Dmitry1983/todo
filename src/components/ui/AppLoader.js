import React from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import { THEME } from '../../theme'

const AppLoader = () => {
    const { view, loader } = styles
    return (
        <View style={view}>
            <ActivityIndicator
                style={loader}
                size="large"
                color={THEME.COLOR.MAIN} />
        </View>
    )
}

export default AppLoader

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loader: {

    }
})