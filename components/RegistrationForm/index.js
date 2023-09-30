import { useState } from 'react'
import { View, StyleSheet } from 'react-native'

import Form from './Form'

const RegistrationForm = () => {

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [conference, setConference] = useState('')
    const [edasId, setEdasId] = useState('')

    const conferenceChangeHandler = value => setConference(value)

    const [isFirstnameValid, setIsFirstnameValid] = useState(true)
    const [isLastnameValid, setIsLastnameValid] = useState(true)
    const [isEmailValid, setIsEmailVaild] = useState(true)
    const [isEdasIdValid, setIsEdasIdVaild] = useState(true)

    const firstnameChangeHandler = value => {
        value = value.trim()
        setFirstname(value)
        if (isNaN(value)) {
            setIsFirstnameValid(true)
        } else {
            setIsFirstnameValid(false)
        }
    }

    const lastnameChangeHandler = value => {
        value = value.trim()
        setLastname(value)
        if (isNaN(value)) {
            setIsLastnameValid(true)
        } else {
            setIsLastnameValid(false)
        }
    }

    const emailChangeHandler = value => {
        value = value.trim()
        setEmail(value)
        const regexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if (value.match(regexp)) {
            setIsEmailVaild(true)
        } else {
            setIsEmailVaild(false)
        }
    }

    const edasIdChangeHandler = value => {
        setEdasId(value)
        const regex = /^\d{7}$/
        if (value.match(regex)) {
            setIsEdasIdVaild(true)
        } else {
            setIsEdasIdVaild(false)
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
                edasId={edasId}
                conference={conference}
                firstnameChangeHandler={firstnameChangeHandler}
                lastnameChangeHandler={lastnameChangeHandler}
                emailChangeHandler={emailChangeHandler}
                edasIdChangeHandler={edasIdChangeHandler}
                conferenceChangeHandler={conferenceChangeHandler}
                isFirstnameValid={isFirstnameValid}
                isLastnameValid={isLastnameValid}
                isEmailValid={isEmailValid}
                isEdasIdValid={isEdasIdValid}
                feedback={feedback}
                feedbackHandler={feedbackHandler}
            />
        </View>
    )
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