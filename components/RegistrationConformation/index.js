import { View, Text, StyleSheet } from "react-native"
import { useSearchParams } from "expo-router";
import { AntDesign } from '@expo/vector-icons';

const RegistrationConformation = () => {
    const { id } = useSearchParams()
    return (<View style={styles.container}>
        <AntDesign name="checkcircle" size={100} color="green" />
        <Text style={styles.message}>Registered Successfully!</Text>
        <Text style={styles.id}>ID - {id}</Text>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    message: {
        fontSize: 20,
        padding: 20,
        fontWeight: 'bold'
    },
    id: {
        fontWeight: 'bold'
    }
})

export default RegistrationConformation