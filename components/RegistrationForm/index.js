import { useState } from 'react'
import { View, StyleSheet } from 'react-native'

import Form from './Form'

const RegistrationForm = () => {

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [conference, setConference] = useState('')
    const [purpose, setPurpose] = useState('')
    const [category, setCategory] = useState('')

    const conferenceChangeHandler = value => setConference(value)
    const purposeChangeHandler = value => setPurpose(value)
    const categoryChangeHandler = value => setCategory(value)

    const [isFirstnameValid, setIsFirstnameValid] = useState(true)
    const [isLastnameValid, setIsLastnameValid] = useState(true)
    const [isEmailValid, setIsEmailVaild] = useState(true)

    const firstnameChangeHandler = value => {
        setFirstname(value)
        if (isNaN(value)) {
            setIsFirstnameValid(true)
        } else {
            setIsFirstnameValid(false)
        }
    }

    const lastnameChangeHandler = value => {
        setLastname(value)
        if (isNaN(value)) {
            setIsLastnameValid(true)
        } else {
            setIsLastnameValid(false)
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
                firstname={firstname}
                lastname={lastname}
                email={email}
                conference={conference}
                purpose={purpose}
                category={category}
                firstnameChangeHandler={firstnameChangeHandler}
                lastnameChangeHandler={lastnameChangeHandler}
                emailChangeHandler={emailChangeHandler}
                conferenceChangeHandler={conferenceChangeHandler}
                purposeChangeHandler={purposeChangeHandler}
                categoryChangeHandler={categoryChangeHandler}
                isFirstnameValid={isFirstnameValid}
                isLastnameValid={isLastnameValid}
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