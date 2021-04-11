/* eslint-disable import/prefer-default-export */
import React from 'react'
import {View, Text, TouchableOpacity, StatusBar, Platform, Image, SafeAreaView} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {useNavigation} from '@react-navigation/native'
import {responsiveFontSize} from 'react-native-responsive-dimensions'
import color from '../../styles/colors'
import styles from './styles/styleHeader'

const Header = (props) => {
  const navigation = useNavigation()
  const renderLeft = () => {
    if (props.left) {
      return (
        <TouchableOpacity accessibilityLabel="backArrow" onPress={() => (props.leftAction ? props.leftAction() : navigation.goBack())}>
          <Icon accessibilityLabel="iconLeftHeader" name={props.left} size={responsiveFontSize(4)} color={color.white} />
        </TouchableOpacity>
      )
    }
    return null
  }

  const renderBody = () => {
    if (props.body) {
      return (
        <View>
          <Text accessibilityLabel={`textHeaderBody${props.body}`} numberOfLines={1} style={styles.textBody}>
            {props.body}
          </Text>
          {props.subBody ? <Text style={styles.textSubBody}>{props.subBody}</Text> : null}
        </View>
      )
    }
    return null
  }

  const renderRight = () => {
    if (props.right) {
      if (props.rightType === 'image') {
        return (
          <TouchableOpacity accessibilityLabel="buttonRightHeader" onPress={() => props.onPressRight()}>
            <Image source={props.right} style={styles.rightImage} />
          </TouchableOpacity>
        )
      }
      return (
        <TouchableOpacity accessibilityLabel="buttonRightHeader" onPress={() => props.onPressRight()}>
          <Icon accessibilityLabel="iconRightHeader" name={props.right} size={responsiveFontSize(4)} color={color.white} />
        </TouchableOpacity>
      )
    }
    return null
  }

  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <View accessibilityLabel="headerOrderConfirm">
        <StatusBar barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'} hidden={false} backgroundColor={color.statusBar} translucent />
        <View accessibilityLabel="subViewHeader" style={[styles.container, {marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}]}>
          <View accessibilityLabel="viewLeftHeader" style={styles.leftContainer}>
            {renderLeft()}
          </View>
          <View accessibilityLabel="viewBodyHeader" style={styles.bodyContainer}>
            {renderBody()}
          </View>
          <View accessibilityLabel="viewHeaderRight" style={styles.rightContainer}>
            {renderRight()}
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Header
