
import {SET_AUTHED_USER , UNSET_AUTHED_USER} from '../action-types'


export const set_authed_user = (id) =>{
    const action = {
        type:SET_AUTHED_USER,
        id 
    }
    return action
}


export const unset_authed_user = () =>{
    const action = {
        type:UNSET_AUTHED_USER
    }
    return action
}