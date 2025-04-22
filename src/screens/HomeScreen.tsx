import React, { useLayoutEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }: any) => {
   // 👉 Set custom header with hamburger icon
   useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={28} style={{ marginLeft: 15 }} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  
  return (
    <View style={styles.container}>
      {/* Top Clouds */}
      <Image source={require('../../assets/images/cloud.png')} style={styles.cloudLeft} />
      <Image source={require('../../assets/images/cloud.png')} style={styles.cloudRight} />

      {/* Door & Logo */}
      <Image source={require('../../assets/images/door.png')} style={styles.door} />
      <Text style={styles.title}>Tiny{"\n"}Shiny{"\n"}Talks</Text>
      <Text style={styles.subtitle}>Helping Little Voices{"\n"}Shine</Text>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <Image source={require('../../assets/images/girl.png')} style={styles.kid} />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <Image source={require('../../assets/images/boy.png')} style={styles.kid} />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}> Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AEE2FF',
    alignItems: 'center',
    paddingTop: 60,
  },
  cloudLeft: {
    position: 'absolute',
    top: 20,
    left: 10,
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  cloudRight: {
    position: 'absolute',
    top: 20,
    right: 10,
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  door: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'serif',
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  kid: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    marginRight: 10,
  },
  button: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
