import React, { useState, useLayoutEffect, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';
import LottieView from 'lottie-react-native';
import { Ionicons } from '@expo/vector-icons';
import HamburgerMenu from '../components/HamburgerMenu';

const LevelsScreen = ({ navigation }: any) => {
  const [unlockedLevel, setUnlockedLevel] = useState(1);
  const [stars, setStars] = useState([0, 0, 0, 0, 0]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  // 🔓 Load completed levels
  useEffect(() => {
    const loadUnlockedLevel = async () => {
      let level = 1;

      const level1Done = await AsyncStorage.getItem('level_1_completed');
      const level2Done = await AsyncStorage.getItem('level_2_completed');
      const level3Done = await AsyncStorage.getItem('level_3_completed');
      const level4Done = await AsyncStorage.getItem('level_4_completed');
      const level5Done = await AsyncStorage.getItem('level_5_completed');

      if (level1Done === 'true') level = 2;
      if (level2Done === 'true') level = 3;
      if (level3Done === 'true') level = 4;
      if (level4Done === 'true') level = 5;

      setUnlockedLevel(level);

      if (level5Done === 'true') {
        setShowSuccess(true);
        await AsyncStorage.removeItem('level_5_completed');
      }
    };

    loadUnlockedLevel();
  }, []);

  // 🍔 Set hamburger icon
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

  const handleLevelPress = (level: number) => {
    if (level <= unlockedLevel) {
      navigation.navigate(`Level${level}`);
    }
  };

  const renderStars = (count: number) => (
    <Text style={styles.stars}>
      {'⭐'.repeat(count)}{'☆'.repeat(3 - count)}
    </Text>
  );

  const renderItem = ({ item: level }: { item: number }) => (
    <Animatable.View
      animation={level <= unlockedLevel ? 'fadeInUp' : 'fadeIn'}
      delay={level * 200}
    >
      <TouchableOpacity
        style={[
          styles.levelButton,
          level <= unlockedLevel ? styles.levelUnlocked : styles.levelLocked,
        ]}
        onPress={() => handleLevelPress(level)}
        disabled={level > unlockedLevel}
      >
        <Text style={styles.levelText}>
          {level <= unlockedLevel ? `Level ${level}` : `🔒 Level ${level}`}
        </Text>
        {level <= unlockedLevel && renderStars(stars[level - 1])}
      </TouchableOpacity>
    </Animatable.View>
  );

  const levels = [1, 2, 3, 4, 5];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌟 Choose a Level</Text>
      <FlatList
        data={levels}
        keyExtractor={(item) => item.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.levelList}
      />

      {/* 🍔 Hamburger Menu */}
      <HamburgerMenu
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
        navigation={navigation}
      />
    </View>
  );
};

export default LevelsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AEE2FF',
    alignItems: 'center',
    paddingTop: 80,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  levelList: {
    alignItems: 'center',
  },
  levelButton: {
    padding: 15,
    marginVertical: 10,
    width: 260,
    borderRadius: 10,
    alignItems: 'center',
  },
  levelUnlocked: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#4caf50',
  },
  levelLocked: {
    backgroundColor: '#ccc',
    borderWidth: 2,
    borderColor: '#888',
  },
  levelText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  stars: {
    fontSize: 20,
    marginTop: 5,
    color: '#ffb300',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#000000aa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  congratsText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
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
