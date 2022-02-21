import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignInScreen, SignUpScreen } from '../screens';

const Stack = createStackNavigator();

const AuthStackNav = () => {
   return (
      <Stack.Navigator
         screenOptions={{
            headerShown: false,
         }}
      >
         <Stack.Screen name="SignInscreen" component={SignInScreen} />
         <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      </Stack.Navigator>
   );
};
export default AuthStackNav;
