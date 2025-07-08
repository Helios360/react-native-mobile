import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { useLocalSearchParams } from 'expo-router';

export default function Result() {
  const { winner, baseNumber, score } = useLocalSearchParams();

  const didWin = winner === 'true';

  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        You've {didWin ? 'won' : 'lost'}{'\n'}
        baseNumber was {baseNumber} and score {score}
      </Text>

      {didWin && (
        <LottieView
          autoPlay
          loop={false}
          style={styles.animation}
          source={require('../assets/winner.json')}
        />
      )}

      {/* Optional: uncomment below if you want a losing animation or image */}
      {/* {!didWin && (
        <LottieView
          autoPlay
          loop={false}
          style={styles.animation}
          source={require('../assets/loser.json')}
        />
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  message: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 30,
  },
  animation: {
    width: 300,
    height: 300,
  },
});
