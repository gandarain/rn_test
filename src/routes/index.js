import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../views/homeScreen'
import CreateScreen from '../views/createScreen'

const Stack = createStackNavigator()

function Routes() {
	return (
	  <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Create" component={CreateScreen} />
      </Stack.Navigator>
	  </NavigationContainer>
	);
}
  
export default Routes