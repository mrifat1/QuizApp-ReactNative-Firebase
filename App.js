import 'react-native-gesture-handler';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthStackNav from './src/navigation/AuthStackNav';
const App = () => {
   return (
      <NavigationContainer>
         <AuthStackNav />
      </NavigationContainer>
   );
};

const styles = StyleSheet.create({});

export default App;
