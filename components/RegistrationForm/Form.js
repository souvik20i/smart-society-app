import { View, ScrollView, StyleSheet } from 'react-native'

import Header from './Header'
import Input from './Input'
import Select from './Select'
import Register from './Register'

const Form = ({ firstname, lastname, email, conference, purpose, category,
    firstnameChangeHandler, lastnameChangeHandler, emailChangeHandler,
    conferenceChangeHandler, purposeChangeHandler, categoryChangeHandler,
    isFirstnameValid, isLastnameValid, isEmailValid,
    feedback, feedbackHandler }) => {

    return (<ScrollView style={styles.form}>
        <Header isOk={!feedback} feedback={feedback} />
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
            label={'Lastname is not valid!'}
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
        <Select
            label='Category'
            options={['IEEE Member', 'IEEE Non-Member', 'Industry', 'IEEE Student Member', 'IEEE Student Non-Member', 'General Attendee']}
            value={category}
            onChange={categoryChangeHandler}
        />
        <Register
            data={{ firstname, lastname, email, conference, purpose }}
            isDisabled={!isFirstnameValid || !isLastnameValid || !isEmailValid || !firstname || !lastname || !email || !conference || !purpose}
            feedbackHandler={feedbackHandler}
        />
        <View style={styles.space} />
    </ScrollView>)
}

const styles = StyleSheet.create({
    form: {
        width: '90%',
        height: '60%',
        padding: 30,
        borderRadius: 20,
        backgroundColor: 'white',
        elevation: 10
    },
    space: {
        width: '100%',
        height: 100
    }
})

export default Form