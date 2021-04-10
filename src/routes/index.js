import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import HomeScreen from '../views/homeScreen'
import CreateScreen from '../views/createScreen'
import SplashScreen from '../views/splashScreen'

const Stack = createStackNavigator()
const StackNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false, ...TransitionPresets.SlideFromRightIOS}} />
      <Stack.Screen name="Create" component={CreateScreen} options={{headerShown: false, ...TransitionPresets.SlideFromRightIOS}} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default () => {
  const [isLoading, setIsLoading] = React.useState(true)

  const finishLoading = () => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  React.useEffect(() => {
    finishLoading()
  }, [])

  if (isLoading) {
    return <SplashScreen />
  }

  return (
    <StackNavigator />
  )
}