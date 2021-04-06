import React from 'react'
import {View, Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const CreateScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Icon name="rocket" size={30} color="#900" />
      <Text>Create Screen</Text>
    </View>
  )
}

export default CreateScreen