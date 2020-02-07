
import {RECEIVE_QUESTIONS,ADD_QUESTION ,SAVE_QUESTION_ANSWER } from '../action-types'
import {add_user_question , save_user_answer} from '../actions/users'
import {_saveQuestion , _saveQuestionAnswer} from '../utils/_DATA'

// Get All questions
export const receive_questions = (data) => {
    const action = {
      type: RECEIVE_QUESTIONS,
      data
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

  export function handleAddQuestion (optionOneText, optionTwoText, authedUser){
    return (dispatch) => {
        return _saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        })
        .then((result) => {
            dispatch(add_question(result));
            dispatch(add_user_question(authedUser, result.id))
        })
    }
}


  // save question answer
  export const save_question_answer = (authedUser, qid, answer) => {
    const action = {
      type: SAVE_QUESTION_ANSWER ,
      authedUser, 
      qid,
      answer
   }
   return action;
  }


  export function handelSaveQuestionAnswer (authedUser, qid, answer){

    return (dispatch) => {
        return _saveQuestionAnswer({
          authedUser: authedUser,
          qid :qid ,
          answer: answer
        })
        .then(() => {
            dispatch(save_question_answer(authedUser, qid, answer));
            dispatch(save_user_answer(authedUser, qid, answer))
        })
    }
}




 
 
