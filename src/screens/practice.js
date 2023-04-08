import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Practice = () => {
    const clicked=()=>{
        console.log(props)
    }
  return (
    <View>
      <Text>Practice</Text>
      <Button title='click'onPress={clicked}/>

    </View>
  )
}

export default Practice

const styles = StyleSheet.create({})