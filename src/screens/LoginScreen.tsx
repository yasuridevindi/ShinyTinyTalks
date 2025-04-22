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

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [menuVisible, setMenuVisible] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => setMenuVisible(true)} style={styles.menuButton}>
          <Ionicons name="menu" size={24} color="#333" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const handleLogin = () => {
    if (email && password) {
      navigation.navigate('Role'); // ✅ Navigate to Role screen
    } else {
      alert('Please enter both email and password');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Clouds */}
      <Image source={require('../../assets/images/cloud.png')} style={styles.cloudLeft} />
      <Image source={require('../../assets/images/cloud.png')} style={styles.cloudRight} />

      {/* Door */}
      <Animatable.Image
        animation="bounceInDown"
        source={require('../../assets/images/door.png')}
        style={styles.door}
      />

      {/* Title */}
      <Animatable.Text animation="fadeInDown" style={styles.title}>
        Welcome{'\n'}Back!
      </Animatable.Text>

      {/* Inputs */}
      <Animatable.View animation="fadeInUp" delay={300} style={styles.inputContainer}>
        <TextInput
          placeholder="Email Address"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </Animatable.View>

      {/* Login Button */}
      <Animatable.View animation="zoomIn" delay={600}>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
  <Text style={styles.buttonText}> Login</Text>
</TouchableOpacity>

      </Animatable.View>

      {/* Forgot Password */}
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Bottom Image */}
      <Animatable.Image
        animation="fadeInUp"
        delay={700}
        source={require('../../assets/images/bottom_kids.png')}
        style={styles.kids}
      />

      {/* Hamburger Menu */}
      <HamburgerMenu
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
        navigation={navigation}
      />
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#AEE2FF',
    alignItems: 'center',
    paddingTop: 80,
    paddingBottom: 150,
  },
  cloudLeft: {
    position: 'absolute',
    top: 80,
    left: 10,
    width: 180,
    height: 180,
    resizeMode: 'contain',
  },
  cloudRight: {
    position: 'absolute',
    top: 80,
    right: 10,
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  door: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,
    color: '#000',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#ccc',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgot: {
    marginTop: 30,
    fontSize: 14,
    color: '#333',
    textDecorationLine: 'underline',
  },
  kids: {
    width: 100,
    height: 100,
    marginTop: 50,
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
