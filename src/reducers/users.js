
import {RECEIVE_USERS ,USER_CREATE_QUESTION} from '../action-types'


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


}


export default users_reducer ;