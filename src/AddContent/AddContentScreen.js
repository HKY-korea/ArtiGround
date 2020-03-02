import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'native-base';
import ImagePicker from 'react-native-image-picker';

class AddContentScreen extends Component {
    constructor() {
        super();
        this.state = {
            filePath: {}
        }
    }
    chooseFile = () => {
        let options = {
            title: 'Select Image',
            customButtons: [
              { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
            ],
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
         };
         ImagePicker.showImagePicker(options, response => {
            console.log('Response = ', response);
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
              alert(response.customButton);
            } else {
              let source = response;
              this.setState({
                filePath: source,
              });
            }
         });
    }
    render() {
        return (
            <View>
                <Button onPress={this.chooseFile.bind(this)} >
                    <Text>Choose File</Text>
                </Button>
            </View>
        )
    }
}

export default AddContentScreen;