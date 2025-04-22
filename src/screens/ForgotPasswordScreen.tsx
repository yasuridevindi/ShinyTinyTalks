import React, { useLayoutEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons';
import HamburgerMenu from '../components/HamburgerMenu';

const ForgotPasswordScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [menuVisible, setMenuVisible] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => setMenuVisible(true)}
          style={styles.menuButton}
        >
          <Ionicons name="menu" size={24} color="#333" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const handleSend = () => {
    console.log('Reset password for:', email);
    alert('Reset link sent (mock)');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../../assets/images/cloud.png')} style={styles.cloudLeft} />
      <Image source={require('../../assets/images/cloud.png')} style={styles.cloudRight} />

      <Animatable.Image
        animation="bounceInDown"
        source={require('../../assets/images/door.png')}
        style={styles.door}
      />

      <Text style={styles.ohno}>Oh No!</Text>
      <Text style={styles.title}>I forgot my{'\n'}Password</Text>

      <TextInput
        placeholder="Email Address"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.helper}>
        Don’t worry!{'\n'}Enter your Email to reset your password.
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleSend}>
        <Text style={styles.buttonText}>📨 Send</Text>
      </TouchableOpacity>

      <Animatable.Image
        animation="fadeInUp"
        delay={700}
        source={require('../../assets/images/bottom_kids.png')}
        style={styles.kids}
      />

      <HamburgerMenu
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
        navigation={navigation}
      />
    </ScrollView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#AEE2FF',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 60,
  },
  cloudLeft: {
    position: 'absolute',
    top: 20,
    left: 10,
    width: 180,
    height: 180,
    resizeMode: 'contain',
  },
  cloudRight: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  door: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 2,
  },
  ohno: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#d32f2f',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#000',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    width: '80%',
  },
  helper: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  kids: {
    width: 300,
    height: 180,
    marginTop: 100,
    resizeMode: 'contain',
  },
  menuButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    marginRight: 10,
  },
});
