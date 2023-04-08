import { StyleSheet, Text, View,Dimensions,ScrollView,Image, Pressable } from 'react-native'
import React from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize'

const screenHeight=Dimensions.get('window').height
const screenWidtht=Dimensions.get('window').width

const IconScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView 
      horizontal 
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      >
        <View style={styles.iconContainer}>
          <View style={styles.iconbackground}>
            <Pressable>
          <Image style={styles.iconImage} source={{uri:'https://res.cloudinary.com/dhiaeoemn/image/upload/v1670418840/iconImages/coupun/whatsnew_h6rf4h.png'}}/>
          </Pressable>
          </View>
          <Text style={styles.iconText}>Info</Text>
        </View>
        <View style={styles.iconContainer} >
          <View style={styles.iconbackground}>
          <Pressable>
          <Image style={styles.iconImage} source={{uri:'https://res.cloudinary.com/dhiaeoemn/image/upload/v1670418839/iconImages/coupun/credit_yry7aa.png'}}/>
          </Pressable>
          </View>
          <Text style={styles.iconText}>Card</Text>
        </View>
        <View style={styles.iconContainer}>
        <View style={styles.iconbackground}>
        <Pressable>
          <Image style={styles.iconImage} source={{uri:'https://res.cloudinary.com/dhiaeoemn/image/upload/v1670418839/iconImages/coupun/coupon_gyh4a0.png'}}/>
          </Pressable>
          </View>
          <Text style={styles.iconText}>coupun</Text>
        </View>
        <View style={styles.iconContainer}>
        <View style={styles.iconbackground}>
        <Pressable>
          <Image style={styles.iconImage} source={{uri:'https://res.cloudinary.com/dhiaeoemn/image/upload/v1670418839/iconImages/coupun/goldplus_zbzhxz.png'}}/>
          </Pressable>
          </View>
          <Text style={styles.iconText}>Insurance</Text>
        </View>
        <View style={styles.iconContainer}>
        <View style={styles.iconbackground}>
        <Pressable>
          <Image style={styles.iconImage} source={{uri:'https://res.cloudinary.com/dhiaeoemn/image/upload/v1670418840/iconImages/coupun/live_vki6ee.png'}}/>
          </Pressable>
          </View>
          <Text style={styles.iconText}>Wifi</Text>
        </View>
        <View style={styles.iconContainer}>
        <View style={styles.iconbackground}>
        <Pressable>
          <Image style={styles.iconImage} source={{uri:'https://res.cloudinary.com/dhiaeoemn/image/upload/v1670395156/iconImages/icon_5_px0nww.png'}}/>
          </Pressable>
          </View>
          <Text style={styles.iconText}>Coin</Text>
        </View>
        <View style={styles.iconContainer}>
        <View style={styles.iconbackground}>
        <Pressable>
          <Image style={styles.iconImage} source={{uri:'https://res.cloudinary.com/dhiaeoemn/image/upload/v1670395156/iconImages/icon4_rlerxx.png'}}/>
          </Pressable>
          </View>
          <Text style={styles.iconText}>Card</Text>
        </View>
      </ScrollView>
      
    </View>
  )
}

export default IconScreen

const styles = StyleSheet.create({
    container:{
      height:screenHeight*0.16,
      marginVertical:'2%',
      justifyContent:'center',
      alignItems:'center'
    },
    iconbackground:{
      width:screenWidtht*0.20,
      height:screenHeight*0.12,
      backgroundColor:'#F2F2F2',
      borderRadius:40,
      justifyContent:'center',
      alignItems:'center',
      marginStart:'5%'
      
    },
    iconImage:{
      width:screenWidtht*0.10,
      height:screenHeight*0.10,
      resizeMode:'stretch'
    },
    iconContainer:{
      width:screenWidtht*0.25,
      justifyContent:'center',
      alignItems:'center',
    },
    iconText:{
      marginTop:'5%',
      color:'#000',
      fontSize:RFPercentage(2.5)
    }
    
})