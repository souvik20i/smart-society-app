import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const Register = ({ data, isDisabled }) => {
    const { name, email, conference, purpose } = data
    const router = useRouter()
    const registerHandler = () => {
        try {
            (async () => {
                // const response = await fetch('http://192.168.90.88:5000/scan/OTHK97951')
                const response = await fetch('http://192.168.90.88:5000/generate', {
                    method: 'POST',
                    body: { name, email, conferenceName: conference, userType: purpose },
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const resData = await response.json();
                console.log(resData)
                // router.push(`/confirm?id=${temp}`)
            })()
        } catch (err) {
            router.push('/error')
            console.log(err)
        }
    }

    return (<TouchableOpacity
        style={styles.button}
        onPress={registerHandler}
        disabled={isDisabled}
    >
        <Text style={styles.register}>Register</Text>
    </TouchableOpacity>)
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'crimson',
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