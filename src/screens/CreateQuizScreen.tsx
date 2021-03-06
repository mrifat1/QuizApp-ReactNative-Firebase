import React, { useState } from 'react';
import { View, Text, StyleSheet, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../constants/theme';
import AppInput from '../components/shared/AppInput';
import AppButton from '../components/shared/AppButton';
import { CreateQuiz } from '../utils/database';

const CreateQuizScreen = () => {
   const navigation = useNavigation();
   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');

   const handleQuizSave = async () => {
      const currentQuizId = Math.floor(
         100000 + Math.random() * 9000,
      ).toString();

      if (title !== '' && description !== '') {
         // Save to firestore
         await CreateQuiz(currentQuizId, title, description);

         // Navigate to Add Question string
         navigation.navigate('AddQuestionScreen', {
            currentQuizId: currentQuizId,
            currentQuizTitle: title,
         });
         setTitle('');
         setDescription('');
         ToastAndroid.show('Quiz Saved', ToastAndroid.SHORT);
      }

      setTitle('');
      setDescription('');
      ToastAndroid.show("Quiz doesn't Saved", ToastAndroid.SHORT);
   };
   return (
      <View
         style={{
            flex: 1,
            backgroundColor: COLORS.white,
            padding: 20,
         }}
      >
         <Text
            style={{
               fontSize: 20,
               textAlign: 'center',
               marginVertical: 20,
               fontWeight: 'bold',
               color: COLORS.black,
            }}
         >
            Create Quiz
         </Text>
         <AppInput
            labelText="Title"
            placeholderText="Enter quiz title"
            onChangeText={val => setTitle(val)}
            value={title}
         />
         <AppInput
            labelText="Description"
            placeholderText="Enter quiz description"
            onChangeText={val => setDescription(val)}
            value={description}
         />

         <AppButton
            labelText="Save Quiz"
            handleOnPress={handleQuizSave}
            style={undefined}
         />
         {/* Temporary button - navigate without saving quiz*/}
         {/* <AppButton
            labelText="Navigate to AddQuestionScreen"
            style={{
               marginVertical: 20,
            }}
            handleOnPress={() => {
               navigation.navigate('AddQuestionScreen', {
                  currentQuizId: '100247',
                  currentQuizTitle: 'demo quiz',
               });
            }}
         /> */}
      </View>
   );
};

export default CreateQuizScreen;
