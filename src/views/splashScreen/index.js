import React from 'react'
import {View, Text, ActivityIndicator} from 'react-native'
import color from '../../assets/styles/colors'
import styles from './styles/styleSplash'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={color.white} size="large" />
      <Text style={styles.textLoading}>Loading ...</Text>
    </View>
  )
}

export default SplashScreen