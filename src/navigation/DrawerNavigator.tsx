import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import RoleScreen from '../screens/RoleScreen';
import LevelsScreen from '../screens/LevelsScreen';
import CustomDrawer from './CustomDrawer'; 
import TeacherScreen from '../screens/TeacherScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true, // ✅ Show header so hamburger icon appears
      }}
      drawerContent={(props) => <CustomDrawer {...props} />} 
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Role" component={RoleScreen} />
      <Drawer.Screen name="Levels" component={LevelsScreen} />
      <Drawer.Screen name="Teacher" component={TeacherScreen} />


    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
