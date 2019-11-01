import React from 'react'
import { connect } from 'react-redux'
// import { formatQuestion }  from '../utils/_DATA'
import { formatQuestion } from '../utils/_DATA'
import { Link } from 'react-router-dom'


class Question extends React.Component {


    viewQuestion = (e, id) => {
            
    }

    render(){

        // console.log(this.props)
        const { id } = this.props



        return(
            <div className = 'question'>
                
             
                <div className="row1">
               
                    <div className="authorName">
                        {this.props.author} asks:
                    </div>
                </div>


                <div className="row2">
                    <div className="avatar"> 
                       
                       <img className="avatarImage" src={this.props.avatar}/>  
                    </div>
                    
                    <div className="wouldYou">
                        
                        <h6 className="wouldYouRatherTitle">Would you Rather </h6>
                        <h6 className="wouldYouRather">{this.props.questionOptionOneText}</h6>
                        Or
                        <h6 className="wouldYouRather">{this.props.questionOptionTwoText}</h6>

                        {/* <Link to='/Dashboard/questionPage'> */}
                        <Link to={`/Dashboard/question/${id}`}>
                          <button className="viewQuestionButton" onClick={this.viewQuestion()}> View Question</button>
                        </Link>
                    </div>

                    
                </div>
                    
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, {id}){
    
    const question = questions[id]

    return{
        authedUser,
        // Q: question,
        questionOptionOneText: question.optionOne.text,
        questionOptionTwoText: question.optionTwo.text,
        author: users[question.author].name,
        avatar: users[question.author].avatarURL,
        // questionFormat: formatQuestion(question.optionOne.text, question.optionTwo.text, users[question.author])
    }
}

export default connect(mapStateToProps)(Question)