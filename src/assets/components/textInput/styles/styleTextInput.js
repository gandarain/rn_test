import {StyleSheet} from 'react-native'
import {responsiveFontSize, responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions'
import color from '../../../styles/colors'
import font from '../../../styles/fontStyles'

export default StyleSheet.create({
	container: {
    marginTop: responsiveHeight(3)
  },
  containerTitle: {
    marginBottom: responsiveHeight(2), 
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  textTitle: {
    fontFamily: font.bold, 
    fontSize: responsiveFontSize(2.3), 
    color: color.font, 
    marginRight: responsiveHeight(2)
  },
  textInput: {
    borderWidth: 1, 
    paddingVertical: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(4),
    borderRadius: 5, 
    borderColor: color.borderLine, 
    fontFamily: font.regular, 
    fontSize: responsiveFontSize(2), 
    color: color.font
  }
})
  