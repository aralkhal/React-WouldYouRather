import React from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import { ProgressBar } from 'react-bootstrap'

class QuestionPage extends React.Component {

    state = {
        selectedOption: ''
    }

    handleOptionChange = (event) => {

        console.log(this.state)
        console.log(event.target.vlaue)

        this.setState({
          selectedOption: event.target.value
        });

        console.log(this.state)
      }

    render(){

        const { id } = this.props
        console.log(this.props)

        // console.log(this.props.match.params.id)

        return(
            // <div>
            //     QuestionPage
            //     {/* if user has this questions in the answered array 
            //         show him the result */}
            //     {/* if the user does not have the question id in the answered array
            //         show him 2 button to choose an answer */}
            //     <Question id={id} />
            // </div>
            <div className = 'questionPage'> 
            
            <div className="row1QuestionPage">
                <div className="authorName">
                    {this.props.author} asks:
                </div>
            </div>
            
            <div className="row2">
                <div className="avatar">  
                   <img className="avatarImage" src={this.props.avatar}/>  
                </div>

                {/* do this if question has not been answered by the user */}
                <div className="wouldYou">
                    <h6 className="wouldYouRatherTitle">Would you Rather </h6>
                    <br />

                    {/* <h6 className="wouldYouRather">{this.props.questionOptionOneText}</h6> */}
                    <label>
                        <input type="radio" value="option1" 
                                            checked={this.state.selectedOption === 'option1'}
                                            onChange={(event) => this.handleOptionChange(event)} />
                        {this.props.questionOptionOneText}
                    </label>
                    <br />

                    {/* <h6 className="wouldYouRather">{this.props.questionOptionTwoText}</h6> */}
                    <label>
                        <input type="radio" value="option2"
                                            checked={this.state.selectedOption === 'option2'}
                                            onChange={(event) => this.handleOptionChange(event)} />
                        {this.props.questionOptionTwoText}
                    </label>
                    
                    <button className="viewQuestionButton"> Submit</button>
                </div>





                {/*  do this if the question has been answered by the user */}
                {/* <div>
                    <h6>Results:</h6>
                    <div>
                        <h6>{this.props.questionOptionOneText}</h6>
                        <ProgressBar now={this.props.questionOptionOneVotes * (100/this.props.TotalVotes)} />
                        <h6> {this.props.questionOptionOneVotes} out of {this.props.TotalVotes} votes</h6>
                    </div>

                    <br />

                    <div>
                        <h6>{this.props.questionOptionTwoText}</h6>
                        <ProgressBar now={this.props.questionOptionTwoVotes * (100/this.props.TotalVotes)} />
                        <h6>{this.props.questionOptionTwoVotes} out of {this.props.TotalVotes} votes</h6>
                    </div>
                    
                </div> */}







            </div>

        </div>
        )
    }
}

function mapStateToProps ({ questions , users, authedUser }, props){

    
    const { id } = props.match.params
    //   const { id } = props.match.params.id
    // const  id  = this.props.id
    // const  tempId  = props.id 
    // const authedUser = 'sarahedo'
    // console.log(id)

    const question = questions[id]
    const questionOptionOneVotes = question.optionOne.votes.length
    const questionOptionTwoVotes = question.optionTwo.votes.length

    return {
        userIdssssssssssssssss: Object.keys(users),
        // usersList: users[authedUser].name
         id,
        // tempId,
        // answers: 
        authedUser,
        // Q: question,
        questionOptionOneText: question.optionOne.text,
        questionOptionTwoText: question.optionTwo.text,

        questionOptionOneVotes: question.optionOne.votes.length,
        questionOptionTwoVotes: question.optionTwo.votes.length,
        TotalVotes: questionOptionOneVotes + questionOptionTwoVotes,

        author: users[question.author].name,
        avatar: users[question.author].avatarURL,

        
    }
}

export default connect(mapStateToProps)(QuestionPage)
// export default QuestionPage 