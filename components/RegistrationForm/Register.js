import { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const Register = ({ data, isValidForm, onFeedback }) => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const {
        firstname: fName, lastname: lName, email, edasId, conference: conferenceName
    } = data

    const postConfig = {
        method: 'post',
        body: JSON.stringify({ fName, lName, email, edasId, conferenceName, userType: 'userType', regCategory: 'regCategory' }),
        headers: { 'Content-Type': 'application/json' }
    }

    const generateID = async () => {
        setIsLoading(true)
        const response = await fetch('https://registration.smartsociety.org/data/registration', postConfig)
        const { id, message, success } = await response.json()
        if (!success) throw new Error(message)
        router.replace(`/confirm?id=${id}`)
        setIsLoading(false)
    }

    const registerHandler = () => {
        if (!isValidForm) {
            onFeedback("All fields are mandatory!")
            return
        }
        generateID().catch(err => {
            onFeedback(err.message)
            setIsLoading(false)
        })
    }

    return (<View style={{
        ...styles.button,
        backgroundColor: isValidForm ? '#1520a6' : 'grey'
    }}>
        <TouchableOpacity onPress={registerHandler}>
            {isLoading ?
                <ActivityIndicator style={styles.loader} color={'white'} size={30} />
                :
                <Text style={styles.register}>Register</Text>
            }
        </TouchableOpacity>
    </View>)
}

const styles = StyleSheet.create({
    button: {
        height: 50,
        justifyContent: 'center',
        borderRadius: 20,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        elevation: 10
    },
    register: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    }
})

export default Register
