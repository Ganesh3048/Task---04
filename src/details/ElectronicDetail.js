import { StyleSheet, Text, View ,Image,Dimensions, Pressable, TouchableOpacity} from 'react-native'
import React from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize'

const screenHeight=Dimensions.get('window').height
const screenWidtht=Dimensions.get('window').width

const ElectronicDetail = ({title,imageSource,price}) => {
  return (
    <View style={styles.electronicContainer}>
    <View style={styles.imageContainer}>
        <TouchableOpacity activeOpacity={0.5}>
      <Image style={styles.electronicImage} source={imageSource}/>
      </TouchableOpacity>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  )
}

export default ElectronicDetail

const styles = StyleSheet.create({
    electronicContainer:{
        borderRadius:5,
        borderWidth:0.5,
        borderColor:'#808080',
        alignItems:'center',
        height:screenHeight*0.25,
        backgroundColor:'#FFF'
    },
    imageContainer:{
        backgroundColor:'#d8f9ff',
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        borderWidth:0.2,
        borderBottomColor:'#FFF',
        height:screenHeight*0.18,
        width:screenWidtht*0.30,
        alignItems:'center',
        justifyContent:'center'
    },
    electronicImage:{
        width:screenWidtht*0.15,
        height:screenHeight*0.15,
        resizeMode:'stretch'
    },
    title:{
        fontWeight:'600',
        color:'#222222',
        fontSize:RFPercentage(2.5)
    },
    price:{
        color:'#444444',
        fontSize:RFPercentage(2.5)
    }
})