import React from 'react';
import { View, Button, TextInput, StyleSheet, Image } from 'react-native';

export default class HomeScreenClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone_number: '',
    };
  }

  onChangeText = (key, val) => {
    this.setState({ phone_number: val });
  };
  signUp = async () => {
    const { username, password, email, phone_number } = this.state;
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ height: 85, width: 194 }}
          source={require('./logo.png')}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          autoCapitalize="none"
          keyboardType="number-pad"
          placeholderTextColor="white"
          value={this.state.phone_number}
          onChangeText={val => this.onChangeText('phone_number', val)}
        />
        <View style={styles.container2}>
          <View style={styles.fixToText}>
            <Button
              title="Login"
              onPress={() => {
                let screen = '';
                if (this.state.phone_number === '8121417187') {
                  this.props.navigation.navigate('Donate');
                } else if(this.state.phone_number === '8121417186') {
                  this.props.navigation.navigate('DonorsList');
                } else if(this.state.phone_number === ''){
                  alert('Please enter your phone number');
                }
                else {
                  alert('Not a registered user');
                }
              }}
            />
            <Button
              title="Resgister"
              onPress={() => this.props.navigation.navigate('Registeration')}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
