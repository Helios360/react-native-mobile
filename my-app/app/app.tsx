import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import {
  GestureHandlerRootView,
  LongPressGestureHandler,
  TapGestureHandler,
  State,
} from 'react-native-gesture-handler';

export default function Home() {
  const router = useRouter();

  function onLongPress(e: any) {
    if (e.nativeEvent.state === State.ACTIVE) {
      router.push('/game');
    }
  }

  function onTap(e: any) {
    if (e.nativeEvent.state === State.ACTIVE) {
      Alert.alert('Long press to start the game');
    }
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TapGestureHandler onHandlerStateChange={onTap}>
          <LongPressGestureHandler
            onHandlerStateChange={onLongPress}
            minDurationMs={800}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Start game!</Text>
            </View>
          </LongPressGestureHandler>
        </TapGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 48,
  },
});
