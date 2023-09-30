import { useRef } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'

import Header from './Header'
import Input from './Input'
import Select from './Select'
import Register from './Register'

const Form = ({ firstname, lastname, email, edasId, conference, firstnameChangeHandler, lastnameChangeHandler,
    emailChangeHandler, conferenceChangeHandler, edasIdChangeHandler, isFirstnameValid, isLastnameValid,
    isEmailValid, isEdasIdValid, feedback, feedbackHandler }) => {

    const scrollRef = useRef()
    const scrollFeedbackHandler = message => {
        feedbackHandler(message)
        scrollRef.current.scrollTo({
            y: 0,
            animated: true
        })
    }

    return (<View style={styles.container}>
        <ScrollView style={styles.form} ref={scrollRef} showsVerticalScrollIndicator={false}>
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
            <Input
                placeholder={'7-Digit EDAS ID'}
                value={edasId}
                onChangeText={edasIdChangeHandler}
                isValid={isEdasIdValid}
                label={'EDAS ID is not vaild!'}
                maxLength={7}
                numeric
            />
            <Select
                label='Conference'
                options={['IEEE AIIOT', 'IEEE UEMCON', 'IEEE CCWC']}
                value={conference}
                onChange={conferenceChangeHandler}
            />
            <View style={{ height: 50 }} />
        </ScrollView>
        <Register
            data={{ firstname, lastname, email, edasId, conference }}
            isValidForm={
                isFirstnameValid && isLastnameValid && isEmailValid && isEdasIdValid &&
                firstname && lastname && email && edasId && conference
            }
            onFeedback={scrollFeedbackHandler}
        />
        <View style={{ height: 10 }} />
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '90%'
    },
    form: {
        padding: 30,
        borderRadius: 20,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: 'white',
        elevation: 10
    }
})

export default Form