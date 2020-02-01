import { SET_AUTHED_USER, UNSET_AUTHED_USER } from '../action-types'

 const authedUser_reducer = (state = null , action) =>{
    if(action.type === SET_AUTHED_USER){
        return action.id ;
   }
   else if(action.type === UNSET_AUTHED_USER){
       return null ;
   }
   else{
       return state;
   }

}


export default authedUser_reducer ;