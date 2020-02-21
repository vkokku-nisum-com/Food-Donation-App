import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  ScrollView,
  Image,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import DateTimePicker from 'react-native-modal-datetime-picker';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import { KeyboardAvoidingView } from 'react-native';

export default class AddDonationclass extends React.Component {
  constructor() {
    super();
    this.state = {
      address: '',
      quantity: '',
      description: '',
      user: {},
      user_id: '5e4e528958cff419236ae810',
      ngo_id: '5e4d4587d2d6681301799297'
    };
  }

  loadUser = () => {
    fetch('http://13.233.155.46:3000/api/user_details', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(res => {
        this.setState({
          user: res[0],
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    console.log('A date has been picked: ', date);
    this.setState({
      duration: date,
    });
    this.hideDateTimePicker();
  };

  onSubmit = () => {
    this.props.navigation.navigate('DoneeList', {itemData:this.state});
  };

  render() {
    var data1 = [['No.s', 'Kgs', 'Litres']];
    var data2 = [['Yes', 'No']];
    this.loadUser();
    console.log(this.state);
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        keyboardVerticalOffset="150"
        enabled>
        <View style={styles.container}>
          <View>
            <Text style={{ fontSize: 20, fontFamily: 'Roboto' }}>
              Food Item :
            </Text>
            <TextInput
              style={{ fontSize: 20, fontFamily: 'Roboto' }}
              value={this.state.description}
              placeholder="Type here"
              onChangeText={text => {
                this.setState({
                  description: text,
                });
              }}
            />
          </View>

          <View>
            <Text style={{ fontSize: 20, fontFamily: 'Roboto' }}>
              Quantity :
            </Text>
            <TextInput
              style={{ fontSize: 20, fontFamily: 'Roboto' }}
              value={this.state.quantity}
              placeholder="Type here"
              keyboardType="number-pad"
              onChangeText={text => {
                this.setState({
                  quantity: text,
                });
              }}
            />
          </View>

          <View>
            <Text style={{ fontSize: 20, fontFamily: 'Roboto' }}>
              Enter Your Address :
            </Text>

            <TextInput
              style={{ fontSize: 20, fontFamily: 'Roboto' }}
              value={this.state.address}
              placeholder="Add your Address"
              onChangeText={text => {
                this.setState({
                  address: text,
                });
              }}
            />
          </View>

          <View style={{ alignItems: 'center' }}>
            <Button
              style={{ borderRadius: 15 }}
              onPress={this.onSubmit}
              title="Search donee"
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'space-evenly',

    //justifyContent: 'center',
    //textAlign:'left',

    paddingLeft: 20,
  },

  // viewy:{
  //     flex:1,
  //     justifyContent:"center",
  // }
});
