import { StyleSheet, Text, View ,Dimensions,ScrollView,Image, FlatList, Pressable} from 'react-native'
import React from 'react'

const screenWidth= Dimensions.get('window').width
const screenHeight= Dimensions.get('window').height

const data=[
  ('https://res.cloudinary.com/dhiaeoemn/image/upload/v1670319716/sliderImage/slider1_y60rju.jpg'),
  ('https://res.cloudinary.com/dhiaeoemn/image/upload/v1670319716/sliderImage/slider4_kp7ahn.jpg'),
  ('https://res.cloudinary.com/dhiaeoemn/image/upload/v1670319716/sliderImage/slider3_qhqnhh.jpg'),
  ('https://res.cloudinary.com/dhiaeoemn/image/upload/v1670319716/sliderImage/slider2_yobypf.webp')
]
const SliderImage = () => {
  return (
    <View style={styles.sliderContainer}>
      <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      >
        {
          data.map((e,index)=>{
            return (
            <Pressable key={index}>
            <Image key={index} resizeMode='stretch' style={styles.images} source={{uri:e}}/>
            </Pressable>
            )
          })
        }
      </ScrollView>
   
    </View>
  )
}

export default SliderImage

const styles = StyleSheet.create({
    sliderContainer:{
        height:screenHeight*0.25
    },
    images:{
      width:screenWidth,
      height:screenHeight*0.25
    }
  
})