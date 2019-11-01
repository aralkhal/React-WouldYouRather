import React from 'react'
import { connect } from 'react-redux'

class LeaderBoardUser extends React.Component {

    render(){

        console.log(this.props)

        return(
            <div> 
                
                

                <div className="leaderBoard">

                    <div className="column1">
                        {/* <div className="avatar"> */}
                            <img className="avatarImage" src={this.props.avatar}/>  
                         {/* </div> */}
                    </div>

                    <div className="column2">
                        <div className="column2-style">
                            <h4> {this.props.userName} </h4>
                            <br></br>
                            <h6>Answered Questions      {this.props.answers}</h6>
                            <hr></hr>
                            <h6>Created questions {this.props.question}</h6>
                        </div>
                    </div>

                    <div className="column3">
                        <div className="score">
                            <div className="score-row1"> Score</div>
                            <div className="score-row2"> {this.props.score} </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


function mapStateToProps ({ questions , users, authedUser}, {id}){

    const user = users[id]
    // const question = questions[users[id]]

    console.log(users[id].answers)
    const answers = Object.keys(users[id].answers).length
    const question = users[id].questions.length
    const total = answers + question

    return {
        userName: users[id].name,
        avatar: users[id].avatarURL,
        question: users[id].questions.length,
        answers: Object.keys(users[id].answers).length, 
        //  score: total
        score: answers + question


    }
}

export default connect(mapStateToProps)(LeaderBoardUser)