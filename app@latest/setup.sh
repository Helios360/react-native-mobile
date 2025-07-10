#!/bin/bash

echo "Installing dependencies..."
npm install react-native-safe-area-context \
            @react-navigation/native \
            @react-navigation/native-stack \
            @react-navigation/elements \
            react-native-screens \
            react-native-gesture-handler \
            react-native-reanimated \
            @reduxjs/toolkit react-redux \
            expo-font @expo-google-fonts/poppins

echo "Linking assets (if needed)..."
npx react-native link

echo "Creating project structure..."
mkdir -p app/screens app/components app/context app/store

echo "Setup complete. You can now start adding components from the PDF spec."
