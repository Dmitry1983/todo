import React, { useContext } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    View,
    Alert
} from 'react-native'
import { THEME } from './theme'
import { Navbar } from './components/Navbar'
import { MainScreen } from './screens/MainScreen'
import { TodoScreen } from './screens/TodoScreen'
import { ScreenContext } from './context/screen/screenContext'


export const MainLayout = () => {
    const { todoId } = useContext(ScreenContext)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Navbar title="ToDo App" />
                <View style={styles.container}>
                    {todoId ? <TodoScreen /> : <MainScreen />}
                </View>
            </View>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
        //padding: 10,
        backgroundColor: 'white',
        paddingVertical: 20,
        paddingHorizontal: THEME.PADDING.HORIZONTAL,
        flex: 1
    },
});
