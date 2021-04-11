import {StyleSheet} from 'react-native'
import {responsiveFontSize, responsiveHeight} from 'react-native-responsive-dimensions'
import font from '../../../styles/fontStyles'
import color from '../../../styles/colors'

export default StyleSheet.create({
  textError: {
    fontFamily: font.bold,
    fontSize: responsiveFontSize(1.5),
    marginTop: responsiveHeight(1),
    color: color.error
  }
})
