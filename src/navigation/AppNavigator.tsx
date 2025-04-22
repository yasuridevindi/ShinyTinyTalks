import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import StartScreen from '../screens/StartScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import DrawerNavigator from './DrawerNavigator'; 
import RoleScreen from '../screens/RoleScreen';
import LevelsScreen from '../screens/LevelsScreen';
import Level1Screen from '../screens/Level1Screen';
import Level2Screen from '../screens/Level2Screen';
import Level3Screen from '../screens/Level3Screen';
import Level4Screen from '../screens/Level4Screen';
import Level5Screen from '../screens/Level5Screen';
import TeacherScreen from '../screens/TeacherScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }} initialRouteName="Start">
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Role" component={RoleScreen} />
        <Stack.Screen name="Levels" component={LevelsScreen} />
        <Stack.Screen name="Level1" component={Level1Screen} />
        <Stack.Screen name="Level2" component={Level2Screen} />
        <Stack.Screen name="Level3" component={Level3Screen} />
        <Stack.Screen name="Level4" component={Level4Screen} />
        <Stack.Screen name="Level5" component={Level5Screen} />
        <Stack.Screen name="TeacherScreen" component={TeacherScreen} />
        
 
        {/* ✅ Drawer embedded as a screen */}
        <Stack.Screen name="MainApp" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
