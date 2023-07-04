import { View, TextInput, StyleSheet } from 'react-native'

import Header from './Header'
import Input from './Input'
import Select from './Select'
import Register from './Register'
import Feedback from './Feedback'

const Form = ({ firstname, lastname, email, conference, purpose,
    firstnameChangeHandler, lastnameChangeHandler, emailChangeHandler,
    conferenceChangeHandler, purposeChangeHandler,
    isFirstnameValid, isLastnameValid, isEmailValid, 
    feedback, feedbackHandler }) => {

    return (<View style={styles.form}>
        <Header />
        <Feedback isValid={!feedback} label={feedback} />
        <Input
            placeholder={'Firstname'}
            value={firstname}
            onChangeText={firstnameChangeHandler}
            isValid={isFirstnameValid}
            label={'Firstname is not valid!'}
        />
        <Input
            placeholder={'Lastname'}
            value={lastname}
            onChangeText={lastnameChangeHandler}
            isValid={isLastnameValid}
            label={'Name is not valid!'}
        />
        <Input
            placeholder={'Email'}
            value={email}
            onChangeText={emailChangeHandler}
            isValid={isEmailValid}
            label={'Email is not valid!'}
        />
        <Select
            label='Conference'
            options={['IEEE IEMCON', 'IEEE UEMCON', 'IEEE CCWC']}
            value={conference}
            onChange={conferenceChangeHandler}
        />
        <Select
            label='Purpose'
            options={['Student', 'Attendee', 'Presentor']}
            value={purpose}
            onChange={purposeChangeHandler}
        />
        <Register
            data={{ firstname,lastname, email, conference, purpose }}
            isDisabled={!isFirstnameValid || !isLastnameValid || !isEmailValid || !firstname || !lastname || !email || !conference || !purpose}
            feedbackHandler={feedbackHandler}
        />
    </View>)
}

const styles = StyleSheet.create({
    form: {
        width: '90%',
        padding: 30,
        borderRadius: 20,
        backgroundColor: 'white',
        elevation: 10
    },
    input: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        marginVertical: 10,
        fontSize: 15,
        color: 'black'
    }
})

export default Form