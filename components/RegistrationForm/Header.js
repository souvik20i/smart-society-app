import { View, Text, StyleSheet } from "react-native"
import Feedback from './Feedback'


const Header = ({ isOk, feedback }) => {
    return (<>
        <Text style={styles.header}>SMART Conference Registration</Text>
        <View style={styles.bottomLine} />
        <Feedback isValid={isOk} label={feedback} />
    </>)
}

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        marginBottom: 10,
        lineHeight: 45,
        textAlign: 'center'
    },
    bottomLine: {
        backgroundColor: '#c92c2c',
        height: 5,
        marginBottom: 30
    }
})

export default Header