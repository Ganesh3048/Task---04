import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize';
import Feather from "react-native-vector-icons/Feather"
import AntDesign from "react-native-vector-icons/AntDesign"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import EvilIcons from "react-native-vector-icons/EvilIcons"
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const Footer = () => {
  return (
    <View style={ styles.footerContainer}>
      <View style={styles.iconCotainer}>
        <View style={styles.iconCotainer2}>
          <Pressable>
        <Feather name='home' style={styles.icons}/>
        </Pressable>
        <Text style={styles.iconText}>Home</Text> 
        </View>
        <View style={styles.iconCotainer2}>
        <Pressable>
        <AntDesign name='appstore-o' style={styles.icons}/>
        </Pressable>
        <Text style={styles.iconText}>Categories</Text> 
        </View>
        <View style={styles.iconCotainer2}>
        <Pressable>
        <SimpleLineIcons name='bell' style={styles.icons}/>
        </Pressable>
        <Text style={styles.iconText}>Notification</Text> 
        </View>
        <View style={styles.iconCotainer2}>
        <Pressable>
        <MaterialCommunityIcons name='account-circle-outline' style={styles.icons}/>
        </Pressable>
        <Text style={styles.iconText}>Account</Text> 
        </View>
        <View style={styles.iconCotainer2}>
        <Pressable>
        <EvilIcons name='cart' style={styles.iconsCart}/>
        </Pressable>

        <Text style={styles.iconText}>Cart</Text> 
        </View>
      </View>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    footerContainer:{
        flex:0.08,
        backgroundColor:'#FFF'
    },
    iconCotainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'

    },
    iconCotainer2:{
        marginTop:'1%',
        width:'20%',
        alignItems:'center'
    },
    icons:{
      color:'#555555',
       fontSize:RFPercentage(3)
    },
    iconsCart:{
      color:'#555555',
      fontSize:RFPercentage(5)
    },
    iconText:{
        fontSize:RFPercentage(1.5),
        marginTop:'5%'
    }
})