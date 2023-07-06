import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const Register = ({ data, isValidForm, onFeedback }) => {
    const router = useRouter()
    const {
        firstname: FName, lastname: lName, email, edasId,
        conference: conferenceName, purpose: userType, category: regCategory
    } = data

    const postConfig = {
        method: 'post',
        body: JSON.stringify({ FName, lName, email, conferenceName, userType, edasId, regCategory }),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const generateID = async () => {
        const response = await fetch('https://registration.smartsociety.org/data/registration', postConfig)
        const { id, message, success } = await response.json()
        if (!success) throw new Error(message)
        router.push(`/confirm?id=${id}`)
    }

    const catchError = err => {
        onFeedback(err.message)
        console.log(err)
    }

    const registerHandler = () => {
        if (!isValidForm) {
            onFeedback("All fields are mandatory!")
            return
        }
        generateID().catch(catchError)
    }

    return (<View style={{
        ...styles.button,
        backgroundColor: isValidForm ? '#1520a6' : 'grey'
    }}>
        <TouchableOpacity onPress={registerHandler}>
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