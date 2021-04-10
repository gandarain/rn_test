import {StyleSheet, Platform} from 'react-native'
import {responsiveFontSize, responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions'
import color from '../../../assets/styles/colors'
import font from '../../../assets/styles/fontStyles'

const styles = StyleSheet.create({
  container: {
    paddingVertical: responsiveHeight(1.5),
    paddingHorizontal: responsiveWidth(5),
    backgroundColor: color.white,
    marginBottom: responsiveHeight(1.5),
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: Platform.OS === 'android' ? 0.4 : 0.1,
  },
  containerUserDetail: {
    flexDirection: 'row'
  },
  containerImageUser: {
    justifyContent: 'center'
  },
  image: {
    height: 60, 
    width: 60, 
    borderRadius: 60/2
  },
  containerUserData: {
    marginLeft: responsiveWidth(3), 
    justifyContent: 'center'
  },
  textUserName: {
    fontFamily: font.bold, 
    fontSize: responsiveFontSize(2), 
    color: color.font
  },
  textUserAge: {
    fontFamily: font.regular, 
    fontSize: responsiveFontSize(2), 
    color: color.font
  },
  containerButton: {
    flexDirection: 'row', 
    width: '100%', 
    justifyContent: 'space-between', 
    marginTop: responsiveHeight(3)
  },
  containerButtonEdit: {
    width: '45%', 
    backgroundColor: color.white, 
    borderWidth: 1, 
    borderColor: color.thema, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 5, 
    borderRadius: 5, 
    flexDirection: 'row'
  },
  textEdit: {
    fontFamily: font.bold, 
    fontSize: responsiveFontSize(2), 
    color: color.thema, 
    marginLeft: responsiveWidth(2.5)
  },
  containerButtonDelete: {
    width: '45%', 
    backgroundColor: color.thema, 
    borderWidth: 1, 
    borderColor: color.thema, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 5, 
    borderRadius: 5, 
    flexDirection: 'row'
  },
  textDelete: {
    fontFamily: font.bold, 
    fontSize: responsiveFontSize(2), 
    color: color.white, 
    marginLeft: responsiveWidth(2.5)
  }
})

export default styles
