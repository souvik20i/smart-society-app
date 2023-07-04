import { TextInput, StyleSheet } from 'react-native'
import Feedback from './Feedback'


const Input = ({ placeholder, value, onChangeText, isValid, label }) => {
    return (<>
        <TextInput style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
        />
        <Feedback isValid={isValid} label={label} />
    </>)
}

const styles = StyleSheet.create({
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

export default Input