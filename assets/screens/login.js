import React, {Component} from 'react';
import {View,Text,Image,TouchableOpacity,TextInput,StatusBar} from 'react-native';



export default class login extends Component{
    render(){   const {navigate}=this.props.navigation;
        return(
              <View style={{backgroundColor:'white',width:'100%',height:'100%'}}>
                  <StatusBar barStyle='dark-content'  backgroundColor = "white" />
                 <Image
                 source={require('../Images/login.jpg')}
                 style={{width:'100%',height:'40%'}}
                 />
                <View>
                 <Text style={{marginLeft:35,fontSize:30,fontFamily:'Montserrat-Medium', }}>Login!</Text>   
                <TextInput
                style={{width:'75%',borderRadius:15,marginLeft:30,marginTop:10,  }}
                placeholder="  Enter Username"
                underlineColorAndroid = "brown"
                />
                <TextInput
                style={{width:'75%',borderRadius:15,marginLeft:30,marginTop:10 }}
                placeholder="  Enter Password"
                underlineColorAndroid = "brown"
                />
                <TouchableOpacity onPress={()=>navigate('Drawer')}
                    style={{marginLeft:30,padding:12,borderRadius:9,borderColor:'#222831',borderWidth:2,width:'40%',marginTop:25}}>
                    <Text style={{textAlign:'center',fontFamily:'Montserrat-Medium'}}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigate('forgotpassword')}
                     style={{marginLeft:35,marginTop:20,width:150}}>
                    <Text style={{fontFamily:'Montserrat-Medium',textDecorationLine:'underline'}}>Forgot Password?</Text>
                </TouchableOpacity>
                </View>

              </View>      

        );


    }
}