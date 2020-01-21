import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Introduction = () => (
    <View>
        <Text style={styles.introduction}>Hi! My name is John, I'm a creative geek from San Francisco, CA. I enjoy creating</Text>
    </View>
);

const styles = StyleSheet.create({
    introduction: {
        fontFamily: 'Arial',
        fontSize: 14,
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: 'left',
        color: '#000000'
    }
});

export default Introduction;