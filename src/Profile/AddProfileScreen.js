import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TextInput, ScrollView, Dimensions, Keyboard } from 'react-native';
import { Button } from 'native-base';

import image from '../constants/image';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import Fire from '../Fire';
import UserPermissions from '../../utilities/UserPermissions';

const firebase = require("firebase")
require("firebase/firestore")

class AddProfileScreen extends Component {
  constructor() {
    super()
    this.state = {
      avatar: null
    }
  }

  componentDidMount() {
    UserPermissions.getCameraPermissions()
  }

  pickImage = async() => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true
    })

    if (!result.cancelled) {
      this.setState({ avatar: result.uri })
    }
  }

  handlePost = () => {
    Fire.shared.addAvatar(this.state.avatar)
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Button 
            transparent
            onPress={() => this.props.navigation.goBack()}
            style={{width: 30}} >
            <Image 
              source={image.BackwardArrow} 
              style={{width: 16, height: 16}} />
          </Button>
          <Button
            style={styles.postButton}
            onPress={this.handlePost} >
            <Text style={styles.postText}>Post</Text>
          </Button>
        </View>

        <ScrollView>
          <View style={styles.imageContainer}>
            <Image
              source={{uri: this.state.avatar}}
              style={{width: '100%', height: '100%'}} />
          </View>
          
          <View style={{alignItems: 'center'}}>
            <Button
              style={styles.chooseFileButton}
              onPress={this.pickImage} >
              <Text style={styles.chooseText}>Choose Your Profile !</Text>
            </Button>
          </View>
          
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  postButton: {
    backgroundColor: '#FCDB98',
    width: 70,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  postText: {
    fontWeight: '500',
    fontSize: 15
  },
  imageContainer: {
    marginTop: 20,
    borderColor: '#FCDB98',
    height: Dimensions.get("window").width - 40,
    marginHorizontal: 20,
    borderWidth: 3
  },
  chooseFileButton: {
    marginTop: 15,
    backgroundColor: '#FCDB98',
    width: 200,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  chooseText: {
    fontWeight: '500',
    fontSize: 15
  }
})

export default AddProfileScreen;