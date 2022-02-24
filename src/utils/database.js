import firestore from '@react-native-firebase/firestore';

export const CreateQuiz = (currentQuizId, title, description) => {
   return firestore().collection('Quizzes').doc(currentQuizId).set({
      title,
      description,
   });
};
