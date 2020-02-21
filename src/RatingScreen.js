import { Rating, AirbnbRating } from 'react-native-ratings';
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

export default class RatingClass extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AirbnbRating
          count={5}
          reviews={['Bad', 'Meh', 'OK', 'Good', 'Amazing']}
          defaultRating={3}
          fullStarColor="#FA6000"
          size={40}
        />
        <TextInput placeholder="Comment" style={styles.textInput} />
        <TouchableOpacity style={styles.button}>
          <Button title="SUBMIT" type="outline" color="#FA6000" />
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
  textInput: {
    borderColor: '#FA6000',
    borderWidth: 1,
    height: 50,
    width: 336,
    paddingLeft: 10,
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
