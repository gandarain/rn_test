import {StyleSheet} from 'react-native'
import color from '../../../assets/styles/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: color.background,
  },
  safeAreaTop: {
    flex: 1,
    backgroundColor: color.thema
  },
  safeAreaBottom: {
    flex: 0,
    backgroundColor: color.white
  }
})

export default styles
