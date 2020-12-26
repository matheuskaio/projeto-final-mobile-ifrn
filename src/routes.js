import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const AppStack = createStackNavigator();


import Home from './pages/Home'
import Ponto from './pages/Ponto'
import ConsultarPonto from './pages/ConsultarPonto'
// import Detail from './pages/Detail'

export default function Routes(){

  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name="Home" component={Home}/>
        <AppStack.Screen name="Ponto" component={Ponto}/>
        <AppStack.Screen name="ConsultarPonto" component={ConsultarPonto}/>
      </AppStack.Navigator>
    </NavigationContainer>
  )
}
