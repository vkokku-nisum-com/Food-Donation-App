import React, { Component } from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
  TextInput,
} from 'react-native';

export default class HurrayScreenClass extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./hurray.png')} style={styles.hurrayImage} />
        <Text style={styles.hurrayText}>HURRAY!!!</Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            frontFamily: 'Hind',
            top: 360,
            position: 'absolute',
          }}>
          NGO has accepted your request.{'\n'}
          We appreciate your kind gesture.
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            frontFamily: 'Hind',
            color: '#FA6000',
            top: 400,
            position: 'absolute',
            fontWeight: '600',
          }}>
          HAPPY FEEDJOY!!
        </Text>
        <TouchableOpacity style={styles.button}>
          <Button
            title="MEAL PICKED UP"
            type="outline"
            color="#FA6000"
            onPress={() => this.props.navigation.navigate('Rating')}
          />
        </TouchableOpacity>
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
  hurrayImage: {
    position: 'absolute',
    left: 54,
    top: 100,
    width: 261,
    height: 261,
  },
  hurrayText: {
    position: 'absolute',
    color: '#FA6000',
    height: 29,
    width: 217,
    left: 170,
    top: 240,
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    position: 'absolute',
    top: 450,
    borderColor: '#FA6000',
    borderWidth: 2,
    borderRadius: 4,
    color: 'FA6000',
  },
});
