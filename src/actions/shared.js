import { _getUsers } from '../utils/_DATA'
import { receiveUsers } from './users'
import { setAuthedUser } from './authedUser'
import { receiveQuestions } from './questions'
import { _getQuestions } from '../utils/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'

// const AUTHED_ID = 'tylermcginnis'

// Thunk Action creator 
export function handleGetInitialData (){

    return (dispatch) => {

        dispatch(showLoading())

        return _getUsers().then((users) => {
            dispatch(receiveUsers(users))
            // dispatch(receiveQuestions(questions))
            // dispatch(setAuthedUser(AUTHED_ID))

        dispatch(hideLoading())

        })
    }
}

export function handleGetQuestions (){

    return (dispatch) => {
        return _getQuestions().then((questions) => {
            dispatch(receiveQuestions(questions))
        })
    }
}