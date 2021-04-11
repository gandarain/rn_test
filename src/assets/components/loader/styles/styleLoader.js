import {StyleSheet} from 'react-native'
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions'
import color from '../../../styles/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: color.loading,
    alignItems: 'center'
  },
  containerActivityIndicator: {
    paddingHorizontal: responsiveWidth(5),
    paddingVertical: responsiveHeight(3),
    backgroundColor: color.borderLine,
    borderRadius: 10
  }
})
