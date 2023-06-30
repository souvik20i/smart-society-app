import { View, Text, StyleSheet } from "react-native"

const Feedback = ({ isValid, label }) => {
    return (<>
        {!isValid && <View>
            <Text style={styles.feedback}>{`* ${label}`}</Text>
        </View>}
    </>)
}

const styles = StyleSheet.create({
    feedback: {
        color: 'red'
    }
})

export default Feedback