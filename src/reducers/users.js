
import {RECEIVE_USERS ,USER_CREATE_QUESTION , USER_ANSWER_QUESTION} from '../action-types'


const users_reducer = (state = {} , action) =>{

    if(action.type === RECEIVE_USERS){

        return {
            ...state,
            ...action.data
          }
    }
     else if(action.type === USER_CREATE_QUESTION) {
        
        return {
            ...state,
            [action.authedUser]: {
              ...state[action.authedUser],
              questions: state[action.authedUser].questions.concat([action.qid])
            }   
        }     
    }
    
    // update number of answered questions by this user
    else if(action.type === USER_ANSWER_QUESTION){

        return {
            ...state,
            [action.authedUser]: {
              ...state[action.authedUser],
              answers: {
                ...state[action.authedUser].answers,
                [action.qid]: action.answer
              }
            }
          }
    }
    
    else{
        return state;
    }


}


export default users_reducer ;