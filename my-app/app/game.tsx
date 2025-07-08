import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import AnimatedButton from '../components/AnimatedButton';

export default function Game() {
  const [choice, setChoice] = useState('');
  const baseNumber = Math.floor(Math.random() * 100);
  const score = Math.floor(Math.random() * 100);

  const router = useRouter();

  useEffect(() => {
    if (choice) {
      const winner =
        (choice === 'higher' && score > baseNumber) ||
        (choice === 'lower' && score < baseNumber);

      router.push({
        pathname: '/result',
        params: {
          winner: winner ? 'true' : 'false',
          baseNumber: baseNumber.toString(),
          score: score.toString(),
        },
      });
    }
  }, [choice]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.baseNumber}>Starting: {baseNumber}</Text>

      <AnimatedButton action="higher" onPress={() => setChoice('higher')} />
      <AnimatedButton action="lower" onPress={() => setChoice('lower')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseNumber: {
    fontSize: 48,
    marginBottom: 30,
  },
});
