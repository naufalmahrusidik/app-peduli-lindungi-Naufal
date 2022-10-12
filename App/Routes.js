import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {SplashScreen, LoginScreen, HomeScreen, ImunizationScreen, EhacScreen, CovidTextScreen} from './Pages';

const Stack = createStackNavigator();

export default Router = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }} />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }} />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }} />
      <Stack.Screen
        name="ImunizationScreen"
        component={ImunizationScreen}
        options={{ 
          title: "Vaccine and Immunization",
          headerShown: true }} /> 
      <Stack.Screen
        name="EhacScreen"
        component={EhacScreen}
        options={{ 
          title: "Ehac",
          headerShown: true, 
          headerTransparent: true }} />
      <Stack.Screen
        name="CovidTextScreen"
        component={CovidTextScreen}
        options={{
          title: "COVID -19 Test Results",
          headerShown: true, }} />
    </Stack.Navigator>
  );
};