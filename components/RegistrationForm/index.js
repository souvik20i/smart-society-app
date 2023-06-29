import { useState } from 'react'
import { View, StyleSheet } from 'react-native'

import Form from './Form'

const RegistrationForm = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [conference, setConference] = useState('')
    const [purpose, setPurpose] = useState('')

    const conferenceChangeHandler = value => setConference(value)
    const purposeChangeHandler = value => setPurpose(value)

    const [isNameValid, setIsNameValid] = useState(true)
    const [isEmailValid, setIsEmailVaild] = useState(true)

    const nameChangeHandler = value => {
        setName(value)
        if (isNaN(value)) {
            setIsNameValid(true)
        } else {
            setIsNameValid(false)
        }
    }
    const emailChangeHandler = value => {
        setEmail(value)
        if (value.match('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')) {
            setIsEmailVaild(true)
        } else {
            setIsEmailVaild(false)
        }
    }

    return (
        <View style={styles.container}>
            <Form
                name={name}
                email={email}
                conference={conference}
                purpose={purpose}
                nameChangeHandler={nameChangeHandler}
                emailChangeHandler={emailChangeHandler}
                conferenceChangeHandler={conferenceChangeHandler}
                purposeChangeHandler={purposeChangeHandler}
                isNameValid={isNameValid}
                isEmailValid={isEmailValid}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'crimson',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default RegistrationForm