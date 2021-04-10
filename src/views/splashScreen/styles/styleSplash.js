import {StyleSheet} from 'react-native'
import {responsiveFontSize, responsiveHeight} from 'react-native-responsive-dimensions'
import color from '../../../assets/styles/colors'
import font from '../../../assets/styles/fontStyles'

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: color.thema, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  textLoading: {
    fontFamily: font.semiBold, 
    fontSize: responsiveFontSize(2.5), 
    color: color.white, 
    paddingTop: responsiveHeight(3)
  }
})

export default styles
