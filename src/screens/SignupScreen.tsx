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
import CustomCheckbox from '../components/CustomCheckBox';
import HamburgerMenu from '../components/HamburgerMenu';

const SignupScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [agree, setAgree] = useState(false);
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

  const handleSignup = () => {
    if (!email || !password || !username) {
      alert('Please fill all fields');
      return;
    }

    if (!agree) {
      alert('You must agree to the terms and conditions');
      return;
    }

    // ✅ Navigate to Role screen
    navigation.navigate('Role');
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
        Create an{'\n'}Account
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
        <TextInput
          placeholder="User Name"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
      </Animatable.View>

      {/* Signup Button */}
      <Animatable.View animation="zoomIn" delay={600}>
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
  <Text style={styles.buttonText}> Signup</Text>
</TouchableOpacity>

      </Animatable.View>

      {/* Checkbox */}
      <View style={styles.checkboxContainer}>
        <CustomCheckbox checked={agree} onChange={() => setAgree(!agree)} />
      </View>

      {/* Bottom Kids */}
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

export default SignupScreen;

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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
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
  checkboxContainer: {
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: 5,
    fontSize: 14,
    color: '#333',
  },
  kids: {
    width: 150,
    height: 150,
    marginTop: 30,
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
