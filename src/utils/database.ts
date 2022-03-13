import firestore from '@react-native-firebase/firestore';

export const CreateQuiz = (currentQuizId, title, description) => {
   return firestore().collection('Quizzes').doc(currentQuizId).set({
      title,
      description,
   });
};

// Create new question for current quiz
export const CreateQuestion = (currentQuizId, currentQuestionId, question) => {
   return firestore()
      .collection('Quizzes')
      .doc(currentQuizId)
      .collection('QNA')
      .doc(currentQuestionId)
      .set(question);
};

export const getQuizzes = () => {
   return firestore().collection('Quizzes').get();
};
export const getQuizById = currentQuizId => {
   return firestore().collection('Quizzes').doc(currentQuizId).get();
};

export const getQuestionsByQuizId = currentQuizId => {
   return firestore()
      .collection('Quizzes')
      .doc(currentQuizId)
      .collection('QNA')
      .get();
};
