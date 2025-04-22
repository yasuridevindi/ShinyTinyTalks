import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

const CustomDrawer = (props: any) => {
  const { navigation } = props;

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      {/* Back */}
      <TouchableOpacity style={styles.item} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={22} color="#333" />
        <Text style={styles.label}>Back</Text>
      </TouchableOpacity>

      {/* Home */}
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Home')}>
        <Ionicons name="home" size={22} color="#333" />
        <Text style={styles.label}>Home</Text>
      </TouchableOpacity>

      {/* Profile */}
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Profile')}>
        <Ionicons name="person" size={22} color="#333" />
        <Text style={styles.label}>Profile</Text>
      </TouchableOpacity>

      {/* Settings */}
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Settings')}>
        <Ionicons name="settings" size={22} color="#333" />
        <Text style={styles.label}>Settings</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  label: {
    fontSize: 16,
    marginLeft: 15,
    color: '#333',
  },
});
