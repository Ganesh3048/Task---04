import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ElectronicDetail from '../details/ElectronicDetail'

const ElectronicItem = () => {
  return (
    <View style={styles.electronicContainer}>
      <ElectronicDetail 
        title='Apple Ipad'
        imageSource={require('../images/Electronic/Appleipad.webp')}
        price= '₹ 59,999'
    />
    <ElectronicDetail 
        title='Lenova Tab'
        imageSource={require('../images/Electronic/lenovaTab.webp')}
        price='₹ 29,999'
    />
    <ElectronicDetail 
        title='Powerbank'
        imageSource={require('../images/Electronic/powerbank.webp')}
        price='₹ 3,999'
    />
    </View>
  )
}

export default ElectronicItem

const styles = StyleSheet.create({
    electronicContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginVertical:'1%',
        marginHorizontal:'2%'
    }
})