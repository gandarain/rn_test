import React from 'react'
import {Text} from 'react-native'
import styles from './styles/styleTextError'

const TextErrorComponent = ({error}) => {
  return <Text style={styles.textError}>{error}</Text>
}

export default TextErrorComponent
