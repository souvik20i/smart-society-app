import { View, Text, StyleSheet } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Footer = () => {
    return (<View style={styles.footer}>
        <View style={styles.block}>
            <MaterialCommunityIcons name="copyright" size={15} color="white" />
            <Text style={styles.text}>2023 Company Inc.</Text>
        </View>
        <View style={styles.block}>
            <Text style={styles.text}>Smart Society</Text>
            <Text style={styles.super}>TM</Text>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        backgroundColor: 'black',
        padding: 7,
        flex: 0.05,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    block: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'flex-end'
    },
    text: {
        color: 'white'
    },
    super: {
        color: 'white',
        fontSize: 10,
        lineHeight: 30
    }
})

export default Footer