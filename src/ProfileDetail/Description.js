import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Description = () => (
    <View style={styles.container}>
        <Text style={styles.name}>Jone Marlie</Text>
        <Text style={styles.description}>John Marlie is a designer called the villain of the modern era. An active designer who works in a wide range of fields, from products to services to even graffiti.</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        fontFamily: 'Helvetica',
        fontSize: 12,
        fontWeight: '300',
        fontStyle: 'normal',
        color: '#1A1311',
        textAlign: 'center'
    },
    description: {
        fontFamily: 'Helvetica',
        fontSize: 12,
        fontWeight: '300',
        color: '#1A1311',
        lineHeight: 21,
        marginTop: 20,
        paddingLeft: 30,
        paddingRight: 30,
        textAlign: 'center'
    }
})

export default Description;