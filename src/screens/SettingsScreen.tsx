// SettingsScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SettingsScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>⚙️ Settings Page</Text>
  </View>
);

export default SettingsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#AEE2FF' },
  text: { fontSize: 24, fontWeight: 'bold' },
});
