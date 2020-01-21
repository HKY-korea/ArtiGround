import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import image from '../constants/image';

const PostPhoto = () => (
    <View>
        <Image 
            source={image['EX_Profile_Photo']}
            style={styles.photo} />
        <View style={styles.boxContainer}>
            <View style={styles.contentStyle}>
                <Image source={image['Like']} />
                <Text style={styles.numberText}>609</Text>
                <Image 
                    source={image['Comment']} 
                    style={styles.commentImage} />
                <Text style={styles.numberText}>120</Text>
            </View>
            <View>
                <Image source={image['More']} />
            </View>
        </View>
    </View>
);

const styles = StyleSheet.create({
    photo: {
        width: '100%'
    },
    boxContainer: {
        height: 56,
        backgroundColor: '#fcdb98',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 32
    },
    numberText: {
        fontFamily: 'Arial',
        fontSize: 14,
        fontWeight: 'bold',
        fontStyle: 'normal',
        letterSpacing: 0,
        textAlign: 'left',
        color: '#694f0b',
        marginLeft: 10
    },
    commentImage: {
        marginLeft: 32
    },
    contentStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default PostPhoto;