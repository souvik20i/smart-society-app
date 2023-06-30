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
        const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if (value.match(reg)) {
            setIsEmailVaild(true)
        } else {
            setIsEmailVaild(false)
        }
    }

    const [feedback, setFeedback] = useState('')
    const feedbackHandler = feedback => {
        setFeedback(feedback)
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
                feedback={feedback}
                feedbackHandler={feedbackHandler}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c92c2c',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default RegistrationForm