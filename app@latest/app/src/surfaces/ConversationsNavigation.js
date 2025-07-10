import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Conversations from './Conversations';
import Messages from './Messages';

const Stack = createStackNavigator();

export default function ConversationsNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: 'white',
        headerTransparent: true,
        headerTitleAlign: 'left',
        headerTitleStyle: {
          textAlign: 'left',
          fontWeight: 'bold',
          fontFamily: 'Poppins_700Bold',
          fontSize: 24,
        },
      }}
    >
      <Stack.Screen name="Conversations" component={Conversations} />
      <Stack.Screen
        name="Messages"
        component={Messages}
        options={({ route }) => ({
          title: route.params.name,
          headerTitleStyle: {
            textAlign: 'center',
            fontFamily: 'Poppins_400Regular',
            fontSize: 20,
            position: 'absolute',
            top: 20,
            left: 120,
          },
        })}
      />
    </Stack.Navigator>
  );
}
