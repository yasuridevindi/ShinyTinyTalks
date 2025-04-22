import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Speech from 'expo-speech';

const Level4Screen = ({ navigation }: any) => {
  const words = ['BIKE', 'TREE'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState<null | boolean>(null);

  const currentWord = words[currentIndex];

  const handleSpeakerPress = () => {
    Speech.speak(currentWord, { language: 'en' });
  };

  const handleMicPress = async () => {
    const simulatedUserSpeech = currentWord;
    const isMatch = simulatedUserSpeech.toLowerCase() === currentWord.toLowerCase();
    setIsCorrect(isMatch);

    if (isMatch) {
      setTimeout(async () => {
        if (currentIndex === 1) {
          await AsyncStorage.setItem('level_4_completed', 'true');
          await AsyncStorage.setItem('progress_level_4', JSON.stringify({ level: 4, stars: 3 }));
          navigation.navigate('Levels');
        } else {
          setCurrentIndex(currentIndex + 1);
          setIsCorrect(null);
        }
      }, 1500);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={
          currentWord === 'BIKE'
            ? require('../../assets/images/bike.png')
            : require('../../assets/images/tree.png')
        }
        style={styles.image}
      />

      <Text style={styles.word}>{currentWord}</Text>

      <TouchableOpacity onPress={handleSpeakerPress} style={styles.iconBtn}>
        <Ionicons name="volume-high" size={28} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleMicPress}
        style={[styles.iconBtn, { backgroundColor: '#00695c' }]}
      >
        <Ionicons name="mic" size={28} color="#fff" />
      </TouchableOpacity>

      {isCorrect === true && (
        <Animatable.Text animation="bounceIn" style={styles.correctText}>
          🎉 It’s Correct Kiddo!
        </Animatable.Text>
      )}
      {isCorrect === false && (
        <Animatable.Text animation="shake" style={styles.wrongText}>
          😢 Try Again Baby!
        </Animatable.Text>
      )}
    </View>
  );
};

export default Level4Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AEE2FF',
    alignItems: 'center',
    paddingTop: 60,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  word: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  iconBtn: {
    backgroundColor: '#4caf50',
    borderRadius: 30,
    padding: 14,
    marginVertical: 10,
  },
  correctText: {
    fontSize: 20,
    color: '#2e7d32',
    fontWeight: 'bold',
    marginTop: 30,
  },
  wrongText: {
    fontSize: 20,
    color: '#c62828',
    fontWeight: 'bold',
    marginTop: 30,
  },
});
