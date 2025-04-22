import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import { Ionicons } from '@expo/vector-icons';

const FinalCelebrationScreen = ({ navigation }: any) => {
  const handleReplay = () => {
    navigation.navigate('Level5');
  };

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/animations/success.json')}
        autoPlay
        loop={false}
        style={{ width: 300, height: 300 }}
      />
      <Text style={styles.text}>🏆 You're a Star! All Levels Completed! 🎉</Text>

      <TouchableOpacity style={styles.replayButton} onPress={handleReplay}>
        <Ionicons name="refresh" size={20} color="#fff" />
        <Text style={styles.replayText}> Replay Level 5</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FinalCelebrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AEE2FF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
    textAlign: 'center',
    color: '#2c3e50',
  },
  replayButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4caf50',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    marginTop: 30,
  },
  replayText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
    fontWeight: 'bold',
  },
});
