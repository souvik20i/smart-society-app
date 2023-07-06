import { useRef } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'

import Header from './Header'
import Input from './Input'
import Select from './Select'
import Register from './Register'

const Form = ({ firstname, lastname, email, edasId, conference, purpose, category,
    firstnameChangeHandler, lastnameChangeHandler, emailChangeHandler, conferenceChangeHandler,
    purposeChangeHandler, categoryChangeHandler, edasIdChangeHandler,
    isFirstnameValid, isLastnameValid, isEmailValid, isEdasIdValid,
    feedback, feedbackHandler }) => {

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
                options={[
                    'C1 : Attnd_Gen_EB', 'C2 : Attnd_Gen_Reg', 'C3 : Attnd_IEEESM_EB', 'C4 : Attnd_IEEESM_Reg', 'C5 : Attnd_IEEEM_EB', 'C6 : Attnd_IEEEM_Reg',
                    'C7 : Auth_IEEEM_EB', 'C8 : Auth_IEEEM_Reg', 'C9 : Auth_Gen_EB', 'C10 : Auth_Gen_Reg', 'C11 : Auth_Industry_EB', 'C12 : Auth_Industry_Reg'
                ]}
                value={category}
                onChange={categoryChangeHandler}
            />
            <View style={{ height: 50 }} />
        </ScrollView>
        <Register
            data={{ firstname, lastname, email, edasId, conference, purpose, category }}
            isValidForm={
                isFirstnameValid && isLastnameValid && isEmailValid && isEdasIdValid &&
                firstname && lastname && email && edasId && conference && purpose && category
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