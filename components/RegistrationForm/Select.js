import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';


const Select = ({ label, options, value, onChange }) => {
    return (<View style={styles.selction}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.select}>
            <Picker 
                selectedValue={value}
                onValueChange={onChange}
            >
                <Picker.Item label='Select' value='' />
                {options.map(item => <Picker.Item key={item} label={item} value={item} />)}
            </Picker>
        </View >
    </View >)
}

const styles = StyleSheet.create({
    selction: {
        marginVertical: 5
    },
    label: {
        fontSize: 15,
        marginVertical: 10
    },
    select: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10
    }
})

export default Select