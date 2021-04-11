import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import color from '../../../assets/styles/colors'
import styles from '../styles/styleComponentCardUser'

const ComponentCardUser = ({item, requestDelete}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerUserDetail}>
        <View style={styles.containerImageUser}>
          <Image source={{uri: item.photo}} style={styles.image} />
        </View>
        <View style={styles.containerUserData}>
          <Text style={styles.textUserName}>
            {item.firstName} {item.lastName}
          </Text>
          <Text style={styles.textUserAge}>{item.age}</Text>
        </View>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity onPress={() => requestDelete()} style={styles.containerButtonEdit}>
          <Icon name="pencil" size={30} color={color.thema} />
          <Text style={styles.textEdit}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => requestDelete(item.id)} style={styles.containerButtonDelete}>
          <Icon name="trash" size={30} color={color.white} />
          <Text style={styles.textDelete}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ComponentCardUser
