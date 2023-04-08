import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import IconScreen from '../MainComponent/IconScreen'
import SliderImage from '../MainComponent/SliderImage'
import ElectronicItem from '../MainComponent/ElectronicItem'
import Sponser from '../MainComponent/Sponser'

const MainScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SliderImage/>
        <IconScreen/>
        <ElectronicItem/>
        <Sponser/>
      </ScrollView>
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  mainContainer:{
    flex:0.77,
    backgroundColor:'#FFF',
  }
})