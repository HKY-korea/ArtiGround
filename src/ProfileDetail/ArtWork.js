import React from 'react';
import { View, ScrollView, Image, StyleSheet } from 'react-native';

import image from '../constants/image';

const ArtWork = ({ images }) => (
    <ScrollView 
        horizontal={true}
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.photoContainer} >
        {images.map(image => (
            <Image
                key={image}
                source={{ uri: image }}
                style={styles.photoStyle} />
        ))}
    </ScrollView>
)

const styles = StyleSheet.create({
    photoContainer: {
        paddingStart: 15,
        paddingEnd: 15
    },
    photoStyle: {
        width: 111,
        height: 111,
        marginHorizontal: 15,
        borderRadius: 16
    }
})

export default ArtWork;