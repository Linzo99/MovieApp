import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const Button = ({ color, text }) => (
    <View style={styles.button}>
        <Text style={styles.text}>{text}</Text>
    </View>
    );

const styles = StyleSheet.create({
    button:{
        width:90,
        height:25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        backgroundColor:'white',
    },
    text:{
        fontSize: 14,
        fontWeight: 'bold',
    }
})
export default Button;