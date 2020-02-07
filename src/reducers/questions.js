
import { RECEIVE_QUESTIONS, ADD_QUESTION, SAVE_QUESTION_ANSWER } from '../action-types'


const questions_reducer = (state = {}, action) => {

  if (action.type === RECEIVE_QUESTIONS) {
    return {
      ...state,
      ...action.data
    }
  }

  else if (action.type === ADD_QUESTION) {
    const { question } = action;
      return {
        ...state,
        [question.id]: question,
      }
  }

  // update questions increase num of voates by 1
  else if (action.type === SAVE_QUESTION_ANSWER) {
    const { authedUser, qid, answer } = action;
    return {
      ...state,
      [qid]: {
        ...state[qid],
        [answer]: {
          ...state[qid][answer],
          votes: state[qid][answer].votes.concat([authedUser])
        }
      }
    }
  }

  else {
    return state;
  }


}




export default questions_reducer 