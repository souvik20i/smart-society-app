import { View, Text, StyleSheet } from "react-native"

const Header = () => {
    return (<>
        <Text style={styles.header}>Registration Form</Text>
        <View style={styles.bottomLine} />
    </>)
}

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        marginBottom: 10
    },
    bottomLine: {
        backgroundColor: 'crimson',
        height: 5,
        marginBottom: 30
    }
})

export default Header