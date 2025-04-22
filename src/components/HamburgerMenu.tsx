import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  visible: boolean;
  onClose: () => void;
  navigation: any;
}

const HamburgerMenu: React.FC<Props> = ({ visible, onClose, navigation }) => {
  if (!visible) return null;

  const handle = (action: () => void) => (event: GestureResponderEvent) => {
    onClose();
    action();
  };

  return (
    <TouchableOpacity style={styles.modalOverlay} activeOpacity={1} onPressOut={onClose}>
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem} onPress={handle(() => navigation.goBack())}>
          <Ionicons name="arrow-back" size={20} color="#333" />
          <Text style={styles.menuText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={handle(() => navigation.navigate('Profile'))}>
          <Ionicons name="person" size={20} color="#333" />
          <Text style={styles.menuText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={handle(() => navigation.navigate('Settings'))}>
          <Ionicons name="settings" size={20} color="#333" />
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.menuItem, styles.logoutItem]}
          onPress={handle(() => navigation.replace('Start'))}
        >
          <Ionicons name="log-out-outline" size={20} color="#FF3B30" />
          <Text style={[styles.menuText, styles.logoutText]}>Logout</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default HamburgerMenu;

const styles = StyleSheet.create({
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  menuContainer: {
    marginTop: 50,
    marginRight: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    width: 200,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  logoutItem: {
    borderBottomWidth: 0,
    marginTop: 5,
  },
  logoutText: {
    color: '#FF3B30',
  },
});
