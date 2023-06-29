import { View, Text, Image, StyleSheet } from "react-native"
import HomeButton from "./HomeButton"

const Error = ({ image, message }) => {
    const paths = {
        '404': require('../../public/404.webp'),
        '404QR': require('../../public/404QR.jpg')
    }
    return (<View style={styles.container}>
        <Image
            style={styles.image}
            source={paths[image]}
        />
        <Text style={styles.errorMessage}>{message}</Text>
        <HomeButton />
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    errorMessage: {
        color: 'grey',
        fontSize: 20
    },
    image: {
        width: '100%',
        height: '60%'
    }
})

export default Error