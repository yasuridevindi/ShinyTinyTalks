import React, { useLayoutEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import HamburgerMenu from '../components/HamburgerMenu';

const RoleScreen = ({ navigation }: any) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleSelectRole = (role: string) => {
    navigation.navigate('Levels', { role });
  };

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

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../../assets/images/cloud.png')} style={styles.cloudLeft} />
      <Image source={require('../../assets/images/cloud.png')} style={styles.cloudRight} />
      <Image source={require('../../assets/images/door.png')} style={styles.door} />

      <Animatable.Text animation="fadeInDown" style={styles.title}>
        Who are you?
      </Animatable.Text>

      <View style={styles.roleContainer}>
        <Animatable.View animation="fadeInUp" delay={100}>
          <TouchableOpacity style={styles.roleButton} onPress={() => handleSelectRole('Kid')}>
            <Image source={require('../../assets/images/girl.png')} style={styles.icon} />
            <Text style={styles.roleText}>Kid</Text>
          </TouchableOpacity>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" delay={200}>
        <TouchableOpacity style={styles.roleButton} onPress={() => navigation.navigate('TeacherScreen')}>
  <Image source={require('../../assets/images/teacher.png')} style={styles.icon} />
  <Text style={styles.roleText}>Teacher/Parent</Text>
</TouchableOpacity>

        </Animatable.View>

        <Animatable.View animation="fadeInUp" delay={300}>
          <TouchableOpacity style={styles.roleButton} onPress={() => handleSelectRole('Therapist')}>
            <Image source={require('../../assets/images/therapist.png')} style={styles.icon} />
            <Text style={styles.roleText}>Therapist</Text>
          </TouchableOpacity>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" delay={400}>
          <TouchableOpacity style={styles.roleButton} onPress={() => handleSelectRole('Admin')}>
            <Image source={require('../../assets/images/admin.png')} style={styles.icon} />
            <Text style={styles.roleText}>Admin</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>

      <HamburgerMenu
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
        navigation={navigation}
      />
    </ScrollView>
  );
};

export default RoleScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#AEE2FF',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 40,
  },
  cloudLeft: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  cloudRight: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  door: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginTop: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  roleContainer: {
    width: '90%',
    alignItems: 'center',
  },
  roleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 280,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginVertical: 10,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  roleText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    color: '#333',
  },
  icon: {
    width: 40,
    height: 40,
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
