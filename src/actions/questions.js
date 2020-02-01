
import {RECEIVE_QUESTIONS,ADD_QUESTION ,SAVE_QUESTION_ANSWER } from '../action-types'


// Define Action Creator -> Function return object

// Get All questions
export const receive_questions = () => {

    const action = {
      type: RECEIVE_QUESTIONS 
   }
  
   return action;
  }


  // Add question
  export const add_question = () => {

    const action = {
      type: ADD_QUESTION 
   }
  
   return action;
  }


  // save question answer
  export const save_question_answer = () => {

    const action = {
      type: SAVE_QUESTION_ANSWER 
   }
  
   return action;
  }