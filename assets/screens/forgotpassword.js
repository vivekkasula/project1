import React, {Component} from 'react';
import {View,Text,Image,TouchableOpacity,TextInput} from 'react-native';



export default class forgotpassword extends Component{
render(){

    return(
    <View style={{backgroundColor:'white',width:'100%',height:'100%'}}>
        <View style={{flexDirection:'row'}}>
            <Image
            source={require('../Images/fgp.png')}
            style={{height:150,width:150,margin:30}}
            />
            <Text style={{fontSize:23,marginTop:100,fontFamily:'Montserrat-Medium'}}>
                Forgot Password? 
            </Text>
        </View>
        <Text style={{fontSize:15,fontFamily:'Montserrat-Regular',marginHorizontal:20}}>
                Please enter your First Name,Last Name,Registered Email ID, Registered Phone number and your Account number to recieve a new Password   
            </Text>

        <View style={{flexDirection:'row',marginTop:50}}>
        <TextInput
                style={{width:'40%',borderRadius:15,marginLeft:30,marginTop:10 }}
                placeholder="  First Name"
                underlineColorAndroid = "brown"/>
        <TextInput
                style={{width:'40%',borderRadius:15,marginLeft:3,marginTop:10 }}
                placeholder="  Last Name"
                underlineColorAndroid = "brown"
                />

        </View>
        <View style={{flexDirection:'row',marginTop:40}}>
        <TextInput
                style={{width:'40%',borderRadius:15,marginLeft:30,marginTop:10, }}
                placeholder="  Mobile Number"
                underlineColorAndroid = "brown"/>
        <TextInput
                style={{width:'40%',borderRadius:15,marginLeft:3,marginTop:10 }}
                placeholder="  Email ID"
                underlineColorAndroid = "brown"
                />
        </View>
        <TextInput
                style={{width:'50%',borderRadius:15,marginLeft:30,marginTop:50 }}
                placeholder="  Account Number"
                underlineColorAndroid = "brown" />
        <TouchableOpacity 
                    style={{marginLeft:30,padding:12,borderRadius:9,borderColor:'black',borderWidth:2,width:'40%',marginTop:25}}>
                    <Text style={{textAlign:'center',fontFamily:'Montserrat-Medium'}}>Submit</Text>
                </TouchableOpacity>       

    </View>


    );
}

}