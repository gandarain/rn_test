import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {useDispatch} from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import {removeDataUser} from '../../../redux/actions/addUserAction'
import color from '../../../assets/styles/colors'
import styles from '../styles/styleComponentHeader'

const ComponentHeader = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

	return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>List User</Text>
      <TouchableOpacity 
        onPress={() => {
          dispatch(removeDataUser())
          navigation.navigate('Create')
        }} 
        style={styles.containerButtonAdd}>
        <Text style={styles.textAdd}>Add New User</Text>
        <Icon name="plus" size={20} color={color.thema} />
      </TouchableOpacity>
    </View>
  )
}

export default ComponentHeader