import { View, Text } from 'react-native';
import React from 'react';
import { signOut } from '../utils/Auth';

const HomeScreen = () => {
   return (
      <View>
         <Text>HomeScreen</Text>

         <Text onPress={signOut}>Log Out</Text>
      </View>
   );
};

export default HomeScreen;
