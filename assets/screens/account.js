import React, {Component} from 'react';
import {View,Text,Image,TouchableOpacity,TextInput} from 'react-native';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';



export default class account extends Component{
    render(){   const {navigate}=this.props.navigation;
return(<View style={{backgroundColor:'#f0f5f9'}}>
    
     <View style={{backgroundColor:'#f0f5f9',width:'100%',height:'100%',marginTop:25}}>
          <TouchableOpacity style={{backgroundColor:'white',width:360,height:100,borderRadius:10,borderWidth:1,borderColor:'#00acee',marginLeft:25,marginBottom:10}}>
              <Icon name= "currency-inr" size={20} style={{marginLeft:20,marginTop:20,position:'absolute'}} />
             <Text style={{marginLeft:40,marginTop:20,fontFamily:'Montserrat-Medium',fontSize:16}}>1 Lakh ChitFund</Text>
             <View style={{flexDirection:'row'}}>
                 <Icon name= "account-group-outline" size={25} style={{marginLeft:25,marginTop:25}} />
                 <Text style={{fontSize:15,marginTop:30,fontFamily:'Montserrat-Medium'}}> : 16</Text>
                 <Icon name= "calendar-clock" size={20} style={{marginLeft:25,marginTop:25}}/>
                 <Text style={{fontSize:15,marginTop:28,fontFamily:'Montserrat-Medium'}}> : 16months</Text>
                 <Icon name= "calendar-month-outline" size={20} style={{marginLeft:25,marginTop:25}}/>
                 <Text style={{fontSize:15,marginTop:28,fontFamily:'Montserrat-Medium'}}> : 14/04/2020</Text>                
             </View >
         </TouchableOpacity>
         <TouchableOpacity style={{backgroundColor:'white',width:360,height:100,borderRadius:10,borderWidth:1,borderColor:'#00acee',marginLeft:25,marginBottom:10}}>
             <Icon name= "currency-inr" size={20} style={{marginLeft:20,marginTop:20,position:'absolute'}} />
             <Text style={{marginLeft:40,marginTop:20,fontFamily:'Montserrat-Medium',fontSize:16}}>5 Lakh ChitFund</Text>
             <View style={{flexDirection:'row'}}>
                 <Icon name= "account-group-outline" size={25} style={{marginLeft:25,marginTop:25}} />
                 <Text style={{fontSize:15,marginTop:30,fontFamily:'Montserrat-Medium'}}> : 16</Text>
                 <Icon name= "calendar-clock" size={20} style={{marginLeft:25,marginTop:25}}/>
                 <Text style={{fontSize:15,marginTop:28,fontFamily:'Montserrat-Medium'}}> : 16months</Text>
                 <Icon name= "calendar-month-outline" size={20} style={{marginLeft:25,marginTop:25}}/>
                 <Text style={{fontSize:15,marginTop:28,fontFamily:'Montserrat-Medium'}}> : 31/01/2020</Text>                
             </View >
         </TouchableOpacity>
         <TouchableOpacity style={{backgroundColor:'white',width:360,height:100,borderRadius:10,borderWidth:1,borderColor:'#00acee',marginLeft:25,marginBottom:10}}>
             <Icon name= "currency-inr" size={20} style={{marginLeft:20,marginTop:20,position:'absolute'}} />
             <Text style={{marginLeft:40,marginTop:20,fontFamily:'Montserrat-Medium',fontSize:16}}>10 Lakh ChitFund</Text>
             <View style={{flexDirection:'row'}}>
                 <Icon name= "account-group-outline" size={25} style={{marginLeft:25,marginTop:25}} />
                 <Text style={{fontSize:15,marginTop:30,fontFamily:'Montserrat-Medium'}}> : 20</Text>
                 <Icon name= "calendar-clock" size={20} style={{marginLeft:25,marginTop:25}}/>
                 <Text style={{fontSize:15,marginTop:28,fontFamily:'Montserrat-Medium'}}> : 20months</Text>
                 <Icon name= "calendar-month-outline" size={20} style={{marginLeft:25,marginTop:25}}/>
                 <Text style={{fontSize:15,marginTop:28,fontFamily:'Montserrat-Medium'}}> : 19/03/2020</Text>                
             </View >
         </TouchableOpacity>
         <TouchableOpacity style={{backgroundColor:'white',width:360,height:100,borderRadius:10,borderWidth:1,borderColor:'#00acee',marginLeft:25,marginBottom:10}}>
             <Icon name= "currency-inr" size={20} style={{marginLeft:20,marginTop:20,position:'absolute'}} />
             <Text style={{marginLeft:40,marginTop:20,fontFamily:'Montserrat-Medium',fontSize:16}}>20 Lakh ChitFund</Text>
             <View style={{flexDirection:'row'}}>
                 <Icon name= "account-group-outline" size={25} style={{marginLeft:25,marginTop:25}} />
                 <Text style={{fontSize:15,marginTop:30,fontFamily:'Montserrat-Medium'}}> : 20</Text>
                 <Icon name= "calendar-clock" size={20} style={{marginLeft:25,marginTop:25}}/>
                 <Text style={{fontSize:15,marginTop:28,fontFamily:'Montserrat-Medium'}}> : 20months</Text>
                 <Icon name= "calendar-month-outline" size={20} style={{marginLeft:25,marginTop:25}}/>
                 <Text style={{fontSize:15,marginTop:28,fontFamily:'Montserrat-Medium'}}> : 25/12/2020</Text>                
             </View >
         </TouchableOpacity>
     </View>
    
    
    
</View>
);}}