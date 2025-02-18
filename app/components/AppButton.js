import React from 'react'; //rsf shortcut
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors'

function AppButton({title, onPress}) {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: '100%'
    },
    text: {
        color: 'white',
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: "bold"
    }
})

export default AppButton;