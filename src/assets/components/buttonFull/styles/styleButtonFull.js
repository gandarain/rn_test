import {StyleSheet} from 'react-native'
import {responsiveFontSize, responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions'
import color from '../../../styles/colors'
import font from '../../../styles/fontStyles'

export default StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(5),
    borderRadius: 5,
    backgroundColor: color.thema,
    marginTop: responsiveHeight(4),
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButton: {
    fontFamily: font.bold,
    fontSize: responsiveFontSize(2),
    color: color.white
  }
})
