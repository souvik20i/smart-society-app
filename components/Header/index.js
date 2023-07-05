import { View, Image, StyleSheet, StatusBar } from 'react-native'

const Header = () => {
    return (<View style={styles.header}>
        <Image
            source={require('../../public/logo-smart.png')}
            style={styles.logo}
        />
    </View>)
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        backgroundColor: '#c92c2c',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20 + StatusBar.currentHeight,
        paddingBottom: 30,
    },
    logo: {
        backgroundColor: '#c92c2c',
    }
})

export default Header