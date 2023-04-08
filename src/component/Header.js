import { View, Text, Pressable,StyleSheet,Image ,Switch,TextInput} from 'react-native'
import React from 'react';
import {RFPercentage} from 'react-native-responsive-fontsize'
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.buttonMainContainer}>
        <Pressable style={styles.buttonContainer1}>
            <Image style={styles.flipkartIcon} source={require('../images/flipkart-icon.webp')}/>
            <Text style={styles.buttonText1}>FlipKart</Text>
        </Pressable>
        <Pressable style={styles.buttonContainer2}>
        <Image style={styles.flipkartIcon} source={require('../images/flipkart-icon.webp')}/>
            <Text style={styles.buttonText2}>Grocery</Text>
        </Pressable>
        </View>
      <View style={styles.serachContainer}>
        <View style={styles.switchContainer}>
            <Text style={styles.switchText}>Brand Mall</Text>
            <Switch/>
        </View>
            <View style={styles.inputContainer}>
                <Icon style={styles.icon}name='magnify'/>
                <TextInput style={styles.inputField}placeholder='Search for products'/>
                <Icon style={styles.icon}name='microphone-outline'/>
                <Icon style={styles.icon}name='camera'/>
            </View>
        </View>
    </View>
  )
}

export default Header

const styles=StyleSheet.create({
    headerContainer:{
        flex:0.15,
        marginHorizontal:'2%'
    },
    buttonMainContainer:{
      alignItems:'center',
      justifyContent:'space-between',
      flexDirection:'row',
    },
    buttonContainer1:{
      justifyContent:'center',
      flexDirection:'row',
      alignItems:'center',
      marginVertical:'5%',
      backgroundColor:'#0C73EB',
      borderRadius:5,
      width:'48%',
      height:'70%',
    },
    buttonContainer2:{
      justifyContent:'center',
      flexDirection:'row',
      borderWidth:1,
      borderColor:'#888888',
      alignItems:'center',
      marginVertical:'5%',
      borderRadius:5,
      width:'48%',
      height:'70%',
    },
    flipkartIcon:{
      height:'55%',
      width:'12%',
    },
    buttonText1:{
      marginLeft:'5%',
      color:'#FFF',
      fontSize:RFPercentage(2),
      fontWeight:'600'
    },
    buttonText2:{
      marginLeft:'5%',
      color:'#000',
      fontSize:RFPercentage(2),
      fontWeight:'600'
    },
    serachContainer:{
      alignItems:'center',                                                    
      flexDirection:'row',
  },
  switchContainer:{
      width:'20%',
      justifyContent:'center',
      alignItems:'center',
  },
  switchText:{
      color:'#000',
      fontSize:RFPercentage(1.5),
      fontWeight:'600'
  },
  inputContainer:{
      flexDirection:'row',
      alignItems:'center',
      borderWidth:1,
      borderColor:'#888888',
      backgroundColor:'#EEEEEE',
      borderRadius:5,
      width:'80%',
      justifyContent:'center',
      height:'85%'
  },
  icon:{
    marginHorizontal:'3%',
      fontSize: RFPercentage(3),
      color:'#888888',
  },
  inputField:{
      flex:1,
  }
})