import {StyleSheet} from 'react-native'
import {responsiveFontSize, responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions'
import color from '../../../styles/colors'
import font from '../../../styles/fontStyles'

export default StyleSheet.create({
  containerSafeArea: {
    backgroundColor: color.header
  },
  container: {
    backgroundColor: color.header,
    flexDirection: 'row',
    paddingHorizontal: responsiveWidth(2.5),
    paddingVertical: responsiveHeight(3),
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  leftContainer: {
    width: '15%'
  },
  bodyContainer: {
    width: '70%',
    alignItems: 'center'
  },
  textBody: {
    color: color.white,
    fontSize: responsiveFontSize(2.2),
    fontFamily: font.bold
  },
  textSubBody: {
    color: color.white,
    fontSize: responsiveFontSize(1.5),
    fontFamily: font.regular,
    textAlign: 'center'
  },
  rightContainer: {
    width: '15%',
    alignItems: 'flex-end'
  },
  rightImage: {
    height: responsiveHeight(3.5),
    width: responsiveWidth(6)
  }
})
