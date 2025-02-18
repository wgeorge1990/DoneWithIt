import React from 'react'
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import { View, Text } from 'react-native';

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
    <Text style={{
      // fontFamily: "Courier",
      fontSize: 30,
      fontStyle: "italic",
      fontWeight: 'bold',
      color: 'tomato',
      textTransform: "capitalize",
      textDecorationLine: "underline",
      textAlign: 'center',
      lineHeight: 30

    }}
    >I LOVE REACT NATIVE and it is a lot of fun to work with and here is some more text</Text>
    
  </View>

  );
}