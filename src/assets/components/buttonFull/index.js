import React from 'react'
import {TouchableOpacity, Text} from 'react-native'
import styles from './styles/styleButtonFull'

const ButtonFullComponent = ({title, handleSubmit}) => {
  return (
    <TouchableOpacity onPress={() => handleSubmit()} style={styles.container}>
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonFullComponent
