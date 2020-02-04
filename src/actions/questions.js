
import {RECEIVE_QUESTIONS,ADD_QUESTION ,SAVE_QUESTION_ANSWER } from '../action-types'
import {add_user_question} from '../actions/users'
import {_saveQuestion} from '../utils/_DATA'

// Get All questions
export const receive_questions = () => {
    const action = {
      type: RECEIVE_QUESTIONS 
   }
   return action;
  }
  
  // Add question
  export const add_question = (question) => {
    const action = {
      type: ADD_QUESTION,
      question
   }
   return action;
  }

  export function handleAddQuestion ({optionOneText, optionTwoText, authedUser}){
    
    console.log(optionOneText, optionTwoText, authedUser , 'from actions')

    return (dispatch) => {
        return _saveQuestion({
            optionOneText,
            optionTwoText,
            authedUser
        })
        .then((result) => {
          console.log(result , 'result')
            dispatch(add_question(result));
            dispatch(add_user_question(authedUser, result.id))
        })
    }
}


  // save question answer
  export const save_question_answer = () => {

    const action = {
      type: SAVE_QUESTION_ANSWER 
   }
  
   return action;
  }


 
 
