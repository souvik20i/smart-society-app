import { View, Text, StyleSheet } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Footer = () => {
    return (<View style={styles.footer}>
        <View style={styles.block}>
            <MaterialCommunityIcons name="copyright" size={15} color="white" />
            <Text style={styles.text}>2023 Company, Inc.</Text>
        </View>
        <View style={styles.vr}>
        </View>
        <View style={styles.block}>
            <Text style={styles.text}>Smart Society</Text>
            <Text style={styles.super}>TM</Text>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    footer: {
        flex: 0.05,
        flexDirection: 'row',
        padding: 4,
        backgroundColor: '#0f0f0f'
    },
    block: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    vr: {
        borderWidth: 1,
        borderColor: 'white',
        height: 20,
        alignSelf: 'center',
    },
    text: {
        color: 'white'
    },
    super: {
        color: 'white',
        fontSize: 10,
        lineHeight: 10
    }
})

export default Footer