import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import colors from '../config/colors'

export default function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon} ></View>
            <View style={styles.deleteIcon} ></View>
            <Image 
            resizeMode="contain" 
            style={styles.image} 
            source={require('../../assets/chair.jpg')} /> 
        </View>
     
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%'
    },
    container: {
        backgroundColor: colors.black,
        flex: 1
    },
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: 'absolute',
        top: 40,
        left: 30
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: 'absolute',
        top: 40,
        right: 30
    }
})