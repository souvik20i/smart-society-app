import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const Register = ({ data, isValidForm, onFeedback, onLoading }) => {
    const router = useRouter()
    const {
        firstname: fName, lastname: lName, email, edasId,
        conference: conferenceName, purpose: userType, category: regCategory
    } = data

    const postConfig = {
        method: 'post',
        body: JSON.stringify({ fName, lName, email, conferenceName, userType, edasId, regCategory }),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const generateID = async () => {
        const response = await fetch('https://registration.smartsociety.org/data/registration', postConfig)
        const { id, message, success } = await response.json()
        console.log(id, message, success)
        if (!success) throw new Error(message)
        router.push(`/confirm?id=${id}`)
    }

    const registerHandler = () => {
        if (!isValidForm) {
            onFeedback("All fields are mandatory!")
            return
        }
        onLoading(true)
        generateID().catch(err => onFeedback(err.message))
        onLoading(false)
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