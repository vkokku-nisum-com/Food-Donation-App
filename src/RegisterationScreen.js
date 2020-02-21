import React, {Component} from 'react'; 
import {Platform, StyleSheet, Text, View,TouchableOpacity,Button,Image,KeyboardAvoidingView} from 'react-native'; 
 
export default class RegisterationClass extends Component{
  constructor(){
    super()
  } 
  render() { 
    return ( 
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <View style={styles.container}> 
 <Image style={{height:85,width:194}} source={require('./logo.png')}/>
        <View style={{paddingTop:20}}>
 <Button onPress={()=>this.props.navigation.navigate("DonorRegisteration")} 
 styles={styles.button} title="DONOR"
 />
 <Button onPress={()=>this.props.navigation.navigate("DoneeRegisteration")} 
 styles={styles.button} title="DONEE"
 />
        </View>
      </View> 
      </KeyboardAvoidingView>
    ); 
 
  } 
} 
 
const styles = StyleSheet.create({ 
  container: { 
    flex:1,
    justifyContent: 'center', 
    alignItems: 'center', 
    
  }, 
 button:{
 fontSize:16,
 fontFamily:'Montserrat',
 borderRadius:20,
 borderWidth:2,
 height:56,
 width:294,
 borderColor:'#000000'
 }
});