import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const screenWidth = Dimensions.get('window').width;

const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  color: () => '#00796b',
  labelColor: () => '#333',
  strokeWidth: 2,
  barPercentage: 0.5,
};

const TeacherScreen = () => {
  const [progressData, setProgressData] = useState([0, 0, 0, 0, 0]);

  useEffect(() => {
    const fetchProgress = async () => {
      const levels = [1, 2, 3, 4, 5];
      const results = [];

      for (let level of levels) {
        const saved = await AsyncStorage.getItem(`progress_level_${level}`);
        if (saved) {
          const { stars } = JSON.parse(saved);
          results.push(stars);
        } else {
          results.push(0);
        }
      }

      setProgressData(results);
    };

    fetchProgress();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>📊 Child's Level Progress</Text>

      <LineChart
        data={{
          labels: ['L1', 'L2', 'L3', 'L4', 'L5'],
          datasets: [{ data: progressData }],
        }}
        width={screenWidth - 30}
        height={340}
        yAxisSuffix="⭐"
        yAxisInterval={1}
        chartConfig={chartConfig}
        bezier
        style={styles.chart}
      />
    </ScrollView>
  );
};

export default TeacherScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#E1F5FE',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#00796b',
  },
  chart: {
    borderRadius: 16,
  },
});
