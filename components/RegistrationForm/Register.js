import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const Register = ({ data, isDisabled, feedbackHandler }) => {
    const router = useRouter()
    const {
        firstname, lastname, email, edasId,
        conference, purpose, category
    } = data

    const postConfig = {
        method: 'post',
        // body: JSON.stringify({ name, email, conferenceName: conference, userType: purpose }),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const generateID = async () => {
        const response = await fetch('https://registration.smartsociety.org/data/registration', postConfig)
        // const response = await fetch('http://192.168.90.8:5000/generate', postConfig)
        const { success, message, id } = await response.json()
        console.log(message)
        if (!success) throw new Error(message)
        router.push(`/confirm?id=${id}`)
    }

    const catchError = err => {
        feedbackHandler(err.message)
        console.log(err)
    }

    const registerHandler = () => {
        // generateID().catch(catchError)
    }

    return (<View style={{
        ...styles.button,
        backgroundColor: !isDisabled ? '#1520a6' : 'grey'
    }}>
        <TouchableOpacity disabled={isDisabled} onPress={registerHandler}>
            <Text style={styles.register}>Register</Text>
        </TouchableOpacity>
    </View>)
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        elevation: 10
    },
    register: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        padding: 10,
    }
})

export default Register