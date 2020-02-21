import React, { Component } from 'react';
import {
  Platform,
  Picker,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
  TextInput,
} from 'react-native';

export default class DonorRegisterationClass extends Component {
  constructor() {
    super();
    this.state = { language: '' };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Donor Registration</Text>
        <TextInput placeholder="Enter Name" style={styles.textInput} />
        <TextInput placeholder="Business Type" style={styles.textInput} />
        <Picker
          selectedValue={this.state.language}
          style={styles.textInput}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ language: itemValue })
          }>
          <Picker.Item label="Individual" value="individual" />
          <Picker.Item label="Resturant" value="resturant" />
          <Picker.Item label="Marriage Hall" value="marriage_hall" />
          <Picker.Item label="PG" value="pg" />
        </Picker>
        <TextInput
          placeholder="Email ID"
          keyboardType="email-address"
          style={styles.textInput}
        />
        <TextInput
          placeholder="Contact Number"
          keyboardType="number-pad"
          style={styles.textInput}
        />
        <TextInput placeholder="Address" style={styles.textInput} />
        <Button title="Register" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textInput: {
    borderColor: '#000000',
    borderWidth: 0.5,
    height: 46,
    width: 336,
    paddingLeft: 10,
  },
});
