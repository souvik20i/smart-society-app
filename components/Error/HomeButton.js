import { Link } from "expo-router"
import { StyleSheet } from "react-native"

const HomeButton = () => {
    return (<Link href='/' style={styles.homeLink}>Home</Link>)
}

const styles = StyleSheet.create({
    homeLink: {
        color: 'white',
        backgroundColor: 'grey',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        margin: 20,
        elevation: 3
    }
})

export default HomeButton