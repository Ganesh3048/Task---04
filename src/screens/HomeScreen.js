import { StyleSheet, View } from 'react-native'
import React from 'react'
import Header from '../component/Header'
import MainScreen from '../component/MainScreen'
import Footer from '../component/Footer'

const HomeScreen = () => {
  return (
    <View style={styles.homeScreenContainer}>
      <Header/>
      <MainScreen/>
      <Footer/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  homeScreenContainer:{
    flex:1
  }
})