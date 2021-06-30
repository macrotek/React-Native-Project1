/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import { Text,View} from 'react-native';

export default class App extends Component{
  render()
  {
    return(
      <View style={{flex:1, alignItems:'center',justifyContent:'center', backgroundColor:'skyblue'}}>
        <Text style={{color:'black', fontSize:20,fontWeight:'300' }}>Welcome to...</Text>
       <Text style={{color:'black', fontSize:30,fontWeight:'bold'
       }}>Macrotek</Text>
      </View>
    )
  }
}
