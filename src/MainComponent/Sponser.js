import { StyleSheet, Text, View ,Dimensions} from 'react-native'
import React from 'react'

const screenHeight=Dimensions.get('window').height
const screenWidtht=Dimensions.get('window').width

const Sponser = () => {
  return (
    <View style={styles.recentContainer}>
      <Text>RecentlyViewed</Text>
    </View>
  )
}

export default Sponser

const styles = StyleSheet.create({
    recentContainer:{
        backgroundColor:'green',
        height:screenHeight*0.25
    }
    
})