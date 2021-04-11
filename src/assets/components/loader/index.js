import React from 'react'
import {Modal, View, ActivityIndicator} from 'react-native'
import color from '../../styles/colors'
import styles from './styles/styleLoader'

const LoadingComponent = ({loading, closeModal}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={loading} onRequestClose={() => closeModal()}>
      <View style={styles.container}>
        <View style={styles.containerActivityIndicator}>
          <ActivityIndicator color={color.thema} size="large" />
        </View>
      </View>
    </Modal>
  )
}

export default LoadingComponent
