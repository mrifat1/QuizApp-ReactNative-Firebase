import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
   HomeScreen,
   CreateQuizScreen,
   AddQuestionScreen,
   PlayQuizScreen,
} from '../screens';

const Stack = createStackNavigator();

const StackNavigator = () => {
   return (
      <Stack.Navigator
         screenOptions={{
            headerShown: true,
         }}
      >
         <Stack.Screen name="HomeScreen" component={HomeScreen} />
         <Stack.Screen name="CreateQuizScreen" component={CreateQuizScreen} />
         <Stack.Screen name="AddQuestionScreen" component={AddQuestionScreen} />
         <Stack.Screen name="PlayQuizScreen" component={PlayQuizScreen} />
      </Stack.Navigator>
   );
};
export default StackNavigator;
