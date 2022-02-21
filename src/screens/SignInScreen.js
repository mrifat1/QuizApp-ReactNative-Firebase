import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import FormButton from '../components/shared/AppButton';
import FormInput from '../components/shared/AppInput';
import { COLORS } from '../constants/theme';
import { signIn } from '../utils/Auth';

const SignInScreen = () => {
   const navigation = useNavigation();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handleOnSubmit = () => {
      if (email !== '' && password !== '') {
         signIn(email, password);
      }
   };
   return (
      <SafeAreaView
         style={{
            backgroundColor: COLORS.white,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: 20,
         }}
      >
         {/* Header */}
         <Text
            style={{
               fontSize: 25,
               color: COLORS.black,
               fontWeight: 'bold',
               marginVertical: 32,
            }}
         >
            Sign In
         </Text>
         {/* Email */}
         <FormInput
            labelText="Email"
            placeholderText="Enter Your Email"
            onChangeText={value => setEmail(value)}
            value={email}
            keyboardType={'email-address'}
         />
         {/* Password */}
         <FormInput
            labelText="Password"
            placeholderText="Enter Your Password"
            onChangeText={value => setPassword(value)}
            value={password}
            keyboardType={'email-address'}
         />
         {/* Submit Button */}
         <FormButton
            labelText="Submit"
            handleOnPress={handleOnSubmit}
            style={{ width: '100%' }}
         />
         {/* footer */}
         <View
            style={{
               flexDirection: 'row',
               alignItems: 'center',
               marginTop: 20,
            }}
         >
            <Text>Don't have an account?</Text>
            <Text
               style={{ marginLeft: 4, color: COLORS.primary }}
               onPress={() => navigation.navigate('SignUpScreen')}
            >
               Create Account
            </Text>
         </View>
      </SafeAreaView>
   );
};

export default SignInScreen;
