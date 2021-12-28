import React from 'react';
import { View, StyleSheet } from 'react-native';

const Icon = ({ children }) => (
    <View style={styles.button}>
        {children}
    </View>
);

const styles = StyleSheet.create({
    button:{
        width: 50,
        height: 50,
        borderRadius: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    }
})
export default Icon;
