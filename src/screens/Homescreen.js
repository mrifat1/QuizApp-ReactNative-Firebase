import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { signOut } from '../utils/Auth';
import AppButton from '../components/shared/AppButton';
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
   const navigation = useNavigation();
   return (
      <SafeAreaView>
         <Text>HomeScreen</Text>

         <Text onPress={signOut}>Log Out</Text>

         <AppButton
            labelText="Create Quiz"
            style={{
               position: 'absolute',
               bottom: 20,
               right: 20,
               borderRadius: 50,
               paddingHorizontal: 30,
            }}
            handleOnPress={() => navigation.navigate('CreateQuizScreen')}
         />
      </SafeAreaView>
   );
};

export default HomeScreen;
