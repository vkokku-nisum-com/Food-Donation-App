import React, { Component } from 'react';
import {
  Platform,
  Picker,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
  TextInput,
} from 'react-native';

export default class DoneeRegisterationClass extends Component {
  constructor() {
    super();
    this.state = { language: '' };
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Donee Registration</Text>
        <TextInput placeholder="NGO Name" style={styles.textInput} />
        <Picker
          selectedValue={this.state.language}
          style={styles.textInput}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ language: itemValue })
          }>
          <Picker.Item label="Yes, I'm FCRA Cerified" value="true" />
          <Picker.Item label="No, I'm Not FCRA Certified" value="false" />
        </Picker>
        <TextInput placeholder="FCRA Number" style={styles.textInput} />
        <TextInput
          placeholder="Contact Number"
          keyboardType="number-pad"
          style={styles.textInput}
        />
        <TextInput
          placeholder="Email ID"
          keyboardType="email-address"
          style={styles.textInput}
        />
        <TextInput placeholder="Address" style={styles.textInput} />
        <TextInput placeholder="Facebook Link" style={styles.textInput} />
        <TextInput placeholder="Nature of Work" style={styles.textInput} />
        <TextInput placeholder="Website" style={styles.textInput} />
        <TextInput
          placeholder="Rate(0-5)"
          style={styles.textInput}
          keyboardType="number-pad"
        />
        <TextInput placeholder="Testomonial" style={styles.textInput} />
        <Button
          title="Register"
          onPress={() => this.props.navigation.navigate('HurrayScreen')}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
  },
  textInput: {
    borderColor: '#000000',
    borderWidth: 0.5,
    height: 46,
    width: 336,
    paddingLeft: 10,
  },
});
