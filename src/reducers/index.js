import { combineReducers } from 'redux'
import users_reducer from './users'
import questions_reducer from './questions'
import authedUser_reducer from './authedUsers'


export default combineReducers({
    users_reducer,
    questions_reducer,
    authedUser_reducer
})