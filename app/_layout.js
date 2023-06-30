import { View, Image, StatusBar, StyleSheet } from "react-native";
import { Stack } from "expo-router";

import Footer from "../components/Footer";

export default () => {
    return (<>
        <Stack screenOptions={{
            statusBarColor: 'black',
            header: () => (<View style={styles.header}>
                <Image
                    source={require('../public/logo-smart.png')}
                    style={styles.logo}
                />
            </View>)
        }}
        />
        <Footer />
    </>)
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        backgroundColor: '#c92c2c',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: StatusBar.currentHeight
    },
    logo: {
        backgroundColor: '#c92c2c',
    }
})