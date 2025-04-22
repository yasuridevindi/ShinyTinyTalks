import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const CustomCheckbox = ({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: () => void;
}) => (
  <TouchableOpacity style={styles.checkbox} onPress={onChange}>
    <View style={[styles.box, checked && styles.checked]}>
      {checked && <Text style={styles.checkmark}>✓</Text>}
    </View>
    <Text style={styles.label}>I Agree to Terms & Conditions</Text>
  </TouchableOpacity>
);

export default CustomCheckbox;

const styles = StyleSheet.create({
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  box: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#333',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: '#fff',
  },
  checkmark: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 14,
    color: '#444',
  },
});
