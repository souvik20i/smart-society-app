import { View, TextInput, StyleSheet } from 'react-native'

import Header from './Header'
import Select from './Select'
import Register from './Register'
import Feedback from './Feedback'

const Form = ({ name, email, conference, purpose,
    nameChangeHandler, emailChangeHandler,
    conferenceChangeHandler, purposeChangeHandler,
    isNameValid, isEmailValid }) => {

    return (<View style={styles.form}>
        <Header />
        <TextInput style={styles.input}
            placeholder='Name'
            value={name}
            onChangeText={nameChangeHandler}
        />
        <Feedback isValid={isNameValid} label={'Name'} />
        <TextInput style={styles.input}
            placeholder='Email'
            value={email}
            onChangeText={emailChangeHandler}
        />
        <Feedback isValid={isEmailValid} label={'Email'} />
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
            data={{ name, email, conference, purpose }}
            isDisabled={!isNameValid || !isEmailValid}
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
});

export default Form