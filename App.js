/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs' 
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import welcome from './assets/screens/welcome';
import login from './assets/screens/login';
import forgotpassword from './assets/screens/forgotpassword';
import home from './assets/screens/home';
import history from './assets/screens/history';
import bidding from './assets/screens/bidding';
import calculator from './assets/screens/calculator';
import receipts from './assets/screens/receipts';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import {createDrawerNavigator} from '@react-navigation/drawer';
import profile from './assets/screens/profile';
import {DrawerContentScrollView,DrawerItemList,} from '@react-navigation/drawer';
import paid from './assets/screens/paid';
import pending from './assets/screens/pending';
import account from './assets/screens/account';
import company from './assets/screens/company';
import logout from './assets/screens/logout';
import care from './assets/screens/care';





const top=createMaterialTopTabNavigator();

class Top extends React.Component{
  render(){
    return(<top.Navigator  tabBarOptions={{style:{backgroundColor:'#222831'},labelStyle:{color:'white'}}}>
      <top.Screen name='paid' component={paid}  />
      <top.Screen name='pending' component={pending}  />
      <top.Screen name='filter' component={account}  />
    </top.Navigator>

    );
  }
}

const drawer= createDrawerNavigator();
  class Draw extends React.Component{
    render(){return(
  <drawer.Navigator   >
       <drawer.Screen name='  Home' component={Tab} />
       <drawer.Screen name='  Profile' component={profile} />   
       <drawer.Screen name='   Comopany' component={company} />   
       <drawer.Screen name=' Customer Care' component={care} />   
       <drawer.Screen name='  Sign out' component={logout} />   
    </drawer.Navigator>
  );
  }}
  
const tab= createMaterialBottomTabNavigator();
  
class Tab extends React.Component{render(){
  return(
    <tab.Navigator barStyle={{ backgroundColor: '#222831',padding:7,}} shifting= {false}>
    <tab.Screen name='Account' component ={home} options={{tabBarIcon:'account',}} />
    <tab.Screen name='Auction History' component ={history} options={{tabBarIcon:'history'}} />
    <tab.Screen name='Bidding' component ={bidding} options={{tabBarIcon:'google-nearby'}}/>
    <tab.Screen name='Calculator' component ={calculator} options={{tabBarIcon:'calculator',}}/>
    <tab.Screen name='Receipts' component ={Top} options={{tabBarIcon:'swap-horizontal-bold'}}  />
          
    </tab.Navigator>);}
  
}
const stack = createStackNavigator(); 
export default class App extends Component { 
  render() {return(
<NavigationContainer>
  <stack.Navigator initialRouteName='welcome'>
    <stack.Screen name='welcome' component={welcome} options={{headerTransparent:true,title:null}} />
    <stack.Screen name='login' component={login} options={{headerTransparent:true,title:null,headerLeft:null}} />
    <stack.Screen name='forgotpassword' component={forgotpassword} options={{headerTransparent:true,title:null,headerLeft:null}} />
    <stack.Screen name='Tab' component={Tab} options={{headerTransparent:true,title:null,headerLeft:null}}/>
    <stack.Screen name='Drawer' component={Draw} options={{headerTransparent:true,title:null,headerLeft:null}}/>
  </stack.Navigator>
</NavigationContainer>
  
);}
};


