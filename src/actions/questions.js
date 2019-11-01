import { _saveQuestion } from '../utils/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'


export function receiveQuestions(questions){
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

// Normal Action Creator
function addQuestion(question){
    return{
        type: ADD_QUESTION,
        question,

    }
}

// Asynchronous Action Creator 
// export function handleAddQuestion({optionOneText, optionTwoText}){
export function handleAddQuestion(optionOneText, optionTwoText){
    return(dispatch, getState) => {

        console.log("The handleAddQuestion Param.. " ,optionOneText, optionTwoText)
        const { authedUser } = getState()

        dispatch(showLoading())

        // adding to the database
        return _saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        })

        // adding to the state
        .then((question) => dispatch(addQuestion(question)))

        .then(() => dispatch(hideLoading()))
    }
}