import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthStackNav from './src/navigation/AuthStackNav';
import auth from '@react-native-firebase/auth';
import { HomeScreen } from './src/screens';
import StackNavigator from './src/navigation/StackNavigator';
const App = () => {
   const [currentUser, setcurrentUser] = useState(null);
   const [isLoading, setisLoading] = useState(true);

   const onAuthStateChanged = async user => {
      await setcurrentUser(user);
      setisLoading(false);
   };

   useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber;
   }, []);

   if (isLoading) {
      return null;
   }

   return (
      <NavigationContainer>
         {currentUser ? <StackNavigator /> : <AuthStackNav />}
      </NavigationContainer>
   );
};

const styles = StyleSheet.create({});

export default App;
