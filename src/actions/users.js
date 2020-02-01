import {RECEIVE_USERS, USER_ANSWER_QUESTION , USER_CREATE_QUESTION} from '../action-types'
import { getInitialData } from '../utils/api'




// Get All users
export const receive_users = (data) => {
    const action = {
      type: RECEIVE_USERS ,
      data
   }  
   return action;
  }


  // Add user question
  export const add_user_question = () => {

    const action = {
      type: USER_CREATE_QUESTION 
   }
  
   return action;
  }


  // save user answer
  export const save_user_answer = () => {

    const action = {
      type: USER_ANSWER_QUESTION 
   }
  
   return action;
  }



  export function loadData(){
   return(dispatch) => {
      return  getInitialData()
      .then((response)=> {
           dispatch(receive_users(response))
       })    
   }
  }

 

