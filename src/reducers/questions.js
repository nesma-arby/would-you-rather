
import { RECEIVE_QUESTIONS, ADD_QUESTION, SAVE_QUESTION_ANSWER } from '../action-types'


const questions_reducer = (state = {}, action) => {

  if (action.type === ADD_QUESTION) {

    const { question } = action;
    return {
      ...state,
      [question.id]: question,
    };
  }

  else if (action.type === SAVE_QUESTION_ANSWER) {
    return {
      ...state
    }
  }

  else{
    return state ;
  }


}




export default questions_reducer 