
import {RECEIVE_USERS} from '../action-types'


const users_reducer = (state = {} , action) =>{
    if(action.type === RECEIVE_USERS){
        return {
           state : action.data
        }
    }

    else{
        return {...state } ;
    }
}


export default users_reducer ;