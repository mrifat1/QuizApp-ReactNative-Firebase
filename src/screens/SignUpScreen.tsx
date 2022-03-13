import React, { useState } from 'react';
import {
   View,
   Text,
   SafeAreaView,
   Alert,
   ScrollView,
   Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../constants/theme';
import AppButton from '../components/shared/AppButton';
import AppInput from '../components/shared/AppInput';
import { signUp } from '../utils/Auth';

const SignUpScreen = () => {
   const navigation = useNavigation();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');

   const handleOnSubmit = () => {
      if (email !== '' && password !== '') {
         if (password === confirmPassword) {
            signUp(email, password);
         } else {
            Alert.alert('Password Did not match');
         }
      }
   };
   return (
      <ScrollView
         contentContainerStyle={{
            flex: 1,
            backgroundColor: COLORS.white,
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: 20,
         }}
      >
         {/* Header */}
         <Text
            style={{
               fontSize: 24,
               color: COLORS.black,
               fontWeight: 'bold',
               marginVertical: 32,
            }}
         >
            Sign Up
         </Text>

         {/* Email */}
         <AppInput
            labelText="Email"
            placeholderText="Enter Your Email"
            onChangeText={value => setEmail(value)}
            value={email}
            keyboardType={'email-address'}
         />

         {/* Password */}
         <AppInput
            labelText="Password"
            placeholderText="Enter Your Password"
            onChangeText={value => setPassword(value)}
            value={password}
            secureTextEntry={true}
         />

         {/* Confirm Password */}
         <AppInput
            labelText="Confirm Password"
            placeholderText="Enter Your Password Again"
            onChangeText={value => setConfirmPassword(value)}
            value={confirmPassword}
            secureTextEntry={true}
         />

         {/* Submit button */}
         <AppButton
            labelText="Sign up"
            handleOnPress={handleOnSubmit}
            style={{ width: '100%' }}
         />

         {/* Footer */}
         <View
            style={{
               flexDirection: 'row',
               alignItems: 'center',
               marginTop: 20,
            }}
         >
            <Text>Already have an account?</Text>
            <Text
               style={{ marginLeft: 4, color: COLORS.primary }}
               onPress={() => navigation.navigate('SignInScreen')}
            >
               Sign in
            </Text>
         </View>
      </ScrollView>
   );
};

export default SignUpScreen;
