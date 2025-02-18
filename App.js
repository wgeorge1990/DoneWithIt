import React from 'react'
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import AppText from './app/components/AppText';

export default function App() {
  
  return (
  //  <WelcomeScreen />
  // <ViewImageScreen />

  <View 
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    <AppText>
      I LOVE REACT NATIVE
    </AppText>
    <MaterialCommunityIcons name="email" size={40} color="blue"/>
  </View>

  );
}