import { View, Text, StyleSheet } from "react-native"
import { useSearchParams } from "expo-router";
import { AntDesign } from '@expo/vector-icons';

const RegistrationConformation = () => {
    const { id } = useSearchParams()
    return (<View style={styles.container}>
        <AntDesign name="checkcircle" size={100} color="green" />
        <Text style={styles.status}>Registered Successfully!</Text>
        <Text style={styles.id}>Participant ID - {id}</Text>
        <Text style={styles.message}>
            You will recieve an email on the registered Email ID shortly.
        </Text>
        <Text style={styles.message}>
            Kindly present the same on the event premises.
        </Text>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    status: {
        fontSize: 20,
        padding: 20,
        fontWeight: 'bold'
    },
    id: {
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: '#c92c2c',
        padding: 10,
        elevation: 5,
        borderRadius: 10,
        marginVertical: 10,
    },
    message: {
        width: '80%',
        textAlign: 'center',
        padding: 10,
        paddingBottom: 0,
        marginBottom: 0,
        lineHeight: 25,
        fontWeight: '500'
    },
})

export default RegistrationConformation