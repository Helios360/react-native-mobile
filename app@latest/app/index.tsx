import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from './src/store/hooks';
import { fetchUsers } from './src/reducers/users';
import UserDetailsModal from './src/surfaces/UserDetailsModal';

// Screens
import Login from './src/surfaces/Login';
import Feed from './src/surfaces/Feed';
import Conversations from './src/surfaces/Conversations';
import AddPost from './src/surfaces/AddPost';
import Favorites from './src/surfaces/Favorites';
import { Profile } from './src/surfaces/Profile';
import ConversationsNavigation from './src/surfaces/ConversationsNavigation';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <View style={{ flex: 1, backgroundColor: 'rgb(41, 39, 39)' }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap = 'home';

            if (route.name === 'Feed') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Conversations') {
              iconName = focused ? 'chatbox' : 'chatbox-outline';
            } else if (route.name === 'Favorites') {
              iconName = focused ? 'heart' : 'heart-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: {
            backgroundColor: 'rgb(41, 39, 39)',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            height: 70,
            position: 'absolute',
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: '#25A0BD',
          tabBarInactiveTintColor: 'white',
          tabBarShowLabel: true,
          headerTransparent: false,
          headerTitleAlign: "left",
          headerStyle: { height: 160 },
          headerTitleStyle: {
            textAlign: "left",
            fontWeight: "bold",
            fontFamily: "Poppins_700Bold",
            fontSize: 24,
          },
        })}
      >
        <Tab.Screen name="Feed" component={Feed} options={{ headerShown: false }} />
        <Tab.Screen
          name="Conversations"
          component={Conversations}
          listeners={({ navigation }) => ({
            tabPress: (e) => {
              e.preventDefault();
              navigation.navigate('ConversationsNav');
            },
          })}
          options={{
            tabBarIcon: ({ size }) => (
              <Ionicons name="chatbox-outline" size={size} color="white" />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="AddPost"
          component={AddPost}
          options={{
            tabBarIcon: ({ size }) => (
              <View style={{ marginTop: -100 }}>
                <View style={{
                  position: 'absolute',
                  backgroundColor: '#000000',
                  width: 60,
                  height: 60,
                  left:-30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 15,
                  transform: [{ rotate: '-45deg' }],
                  shadowColor: '#000000',
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.2,
                  shadowRadius: 4,
                }}>
                  <Ionicons name="add-circle-outline" color="#ffffff" size={30} style={{transform:[{rotate:'-45deg'}]}}/>
                </View>
              </View>
            ),
          }}
        />
        <Tab.Screen name="Favorites" component={Favorites} />
        <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      </Tab.Navigator>
    </View>
  );
}


function RootNavigator() {
  const dispatch = useAppDispatch();
  const [userLoggedIn, setIsUserLoggedIn] = useState(true);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <Stack.Navigator>
      {!userLoggedIn ? (
        <Stack.Screen name="Login" component={Login} />
      ) : (
        <>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="ConversationsNav" component={ConversationsNavigation} options={{ headerShown: false }} />
          <Stack.Group screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen
              name="UserDetailsModal"
              component={UserDetailsModal}
              options={{ headerShown: false }}
            />
          </Stack.Group>
        </>
      )}
    </Stack.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </SafeAreaProvider>
  );
}