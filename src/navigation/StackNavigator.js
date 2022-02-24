import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, CreateQuizScreen, AddQuestionScreen } from '../screens';

const Stack = createStackNavigator();

const StackNavigator = () => {
   return (
      <Stack.Navigator
         screenOptions={{
            headerShown: false,
         }}
      >
         <Stack.Screen name="HomeScreen" component={HomeScreen} />
         <Stack.Screen name="CreateQuizScreen" component={CreateQuizScreen} />
         <Stack.Screen name="AddQuestionScreen" component={AddQuestionScreen} />
      </Stack.Navigator>
   );
};
export default StackNavigator;
