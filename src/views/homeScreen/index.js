import React from 'react'
import {View, Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const HomeScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Icon name="rocket" size={30} color="#900" />
      <Text>Home Screen</Text>
    </View>
  )
}

export default HomeScreen