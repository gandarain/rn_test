import React from 'react'
import {View, Text, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {responsiveFontSize} from 'react-native-responsive-dimensions'
import color from '../../styles/colors'
import styles from './styles/styleTextInput'

const TextInputComponent = ({placeholder, value, onChangeText, keyboardType, autoCapitalize, icon}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.textTitle}>{placeholder}</Text>
        <Icon name={icon} size={responsiveFontSize(3)} color={color.thema} />
      </View>
      <TextInput 
        placeholder={placeholder}
        value={value}
        onChangeText={(val) => onChangeText(val)}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        style={styles.textInput}
      />
    </View>
  )
}

export default TextInputComponent