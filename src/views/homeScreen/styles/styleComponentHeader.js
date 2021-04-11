import {StyleSheet, Platform} from 'react-native'
import {responsiveFontSize, responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions'
import color from '../../../assets/styles/colors'
import font from '../../../assets/styles/fontStyles'

const styles = StyleSheet.create({
  container: {
    marginBottom: responsiveHeight(3),
    marginTop: Platform.OS === 'ios' ? responsiveHeight(3) : responsiveHeight(6),
    marginHorizontal: responsiveHeight(2.5),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textTitle: {
    fontFamily: font.bold,
    fontSize: responsiveFontSize(2),
    color: color.font
  },
  containerButtonAdd: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center'
  },
  textAdd: {
    fontFamily: font.semiBold,
    fontSize: responsiveFontSize(1.8),
    color: color.font,
    marginRight: responsiveWidth(2.5)
  }
})

export default styles
