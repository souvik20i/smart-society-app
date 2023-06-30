import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const Register = ({ data, isDisabled, feedbackHandler }) => {
    const router = useRouter()
    const { name, email, conference, purpose } = data

    const postConfig = {
        method: 'post',
        body: JSON.stringify({ name, email, conferenceName: conference, userType: purpose }),
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
        generateID().catch(catchError)
    }

    return (<TouchableOpacity
        style={{ ...styles.button, backgroundColor: !isDisabled ? '#c92c2c' : 'grey' }}
        onPress={registerHandler}
        disabled={isDisabled}
    >
        <Text style={styles.register}>Register</Text>
    </TouchableOpacity>)
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 5,
        elevation: 5,
        marginTop: 30
    },
    register: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    }
})

export default Register