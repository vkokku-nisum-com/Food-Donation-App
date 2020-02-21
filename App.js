import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { TextInput } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import HomeScreenClass from './src/HomeScreen';
import RegisterationClass from './src/RegisterationScreen';
import DonorRegisterationClass from './src/DonorRegisteration';
import DoneeRegisterationClass from './src/DoneeRegisteration';
import HurrayScreenClass from './src/HurrayScreen';
import RatingClass from './src/RatingScreen';
import DoneeList from './src/DoneeList';
import DoneeDetail from './src/DoneeDetail';
import DonorsList from './src/DonorsList';
import DonateClass from './src/Donate';
import DistributeClass from './src/Distribute';
import DonorDetail from './src/DonorDetail';

class Sidescreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.sidy}
          onPress={() => this.props.navigation.navigate('Donate')}>
          <Image
            style={{ width: 150, height: 150 }}
            source={require('./src/Donate.png')}
          />
          <Button style={styles.texty} title="DONATE" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sidy}
          onPress={() => this.props.navigation.navigate('Distribute')}>
          <Image
            style={{ width: 200, height: 200 }}
            source={require('./src/Distribution.jpg')}
          />
          <Button style={styles.texty} title="DISTRIBUTE" />
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

  sidy: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: 20,
  },

  // fieldy:{
  // 	paddingTop:20,
  // },

  texty: {
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 20,
    backgroundColor: '#4260f5',
    borderRadius: 20,
  },
});

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreenClass,
    Registeration: RegisterationClass,
    DonorRegisteration: DonorRegisterationClass,
    DoneeRegisteration: DoneeRegisterationClass,
    HurrayScreen: HurrayScreenClass,
    Rating: RatingClass,
    DoneeList: DoneeList,
    DoneeDetail: DoneeDetail,
    Side: Sidescreen,
    Donate: DonateClass,
    Distribute: DistributeClass,
    DonorsList: DonorsList,
    DonorDetail: DonorDetail
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);
