import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import color from '../../../assets/styles/colors'
import styles from '../styles/styleComponentHeader'

const ComponentHeader = () => {
	return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>List User</Text>
      <TouchableOpacity style={styles.containerButtonAdd}>
        <Text style={styles.textAdd}>Add New User</Text>
        <Icon name="plus" size={20} color={color.thema} />
      </TouchableOpacity>
    </View>
  )
}

export default ComponentHeader