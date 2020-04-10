
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs' 
import {SafeAreaView,StyleSheet,ScrollView,Button,View,Text,StatusBar,Image,TouchableOpacity} from 'react-native';

export default class welcome extends Component{
    render()
    {   const {navigate}=this.props.navigation;
    return(
    <View style={{backgroundColor:'white',height:'100%',width:'100%'}}>
    <StatusBar barStyle='dark-content'  backgroundColor = "white" />
    <Image
      source={require('../Images/first.jpg')}
      style={{width:'100%',height:'57%',}}
    />
    <View style={{alignItems:'center',alignContent:'center',justifyContent:'center'}}>
      <Text style={{marginTop:10,fontSize:60,fontFamily:'Lobster-Regular'}}>Welcome! </Text>
<Text style={{fontSize:20,marginTop:25,fontFamily:'Montserrat-Regular',marginHorizontal:30,textAlign:'center'}}>Investment Today is a Source of Income Tomorrow.</Text>
      
      <TouchableOpacity onPress={()=> navigate('login')}
                   style={{backgroundColor:'white',padding:12,width:'70%',marginTop:50,borderColor:'#222831',borderWidth:3,alignItems:'center',borderRadius:7} }>
                   <Text style={{color:'black',fontSize:22,fontFamily:'Montserrat-Bold'}}>Login</Text> 
     </TouchableOpacity>
      
    </View>    
   </View>



    );
}
}