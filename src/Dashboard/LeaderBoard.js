import React from 'react'
import { connect } from 'react-redux'
import LeaderBoardUser from './LeaderBoardUser'

class LeaderBoard extends React.Component {

    render(){

        console.log(this.props)

        return(
            <div>
                
                
                
                <div className="container">
                    <ul className="questionList">
                        {this.props.userIds.map((id) => (
                            <li key={id}>
                                <LeaderBoardUser id={id}/>
                            </li>
                        ))}
                    </ul>
                </div>


                {/* <div className="leaderBoard">

                    <div className="column1">
                        Avatar
                    </div>

                    <div className="column2">
                        <div className="column2-style">
                            <h4> Sarah Edo</h4>
                            <br></br>
                            <h6>Answered Questions      7</h6>
                            <hr></hr>
                            <h6>Created questions 3</h6>
                        </div>
                    </div>

                    <div className="column3">
                        <div className="score">
                            <div className="score-row1"> Score</div>
                            <div className="score-row2"> 10</div>
                        </div>
                    </div>
                </div>

                <ul>
                    {this.props.userIds.map((id)=> (
                        <li key={id}>
                            {id}
                        </li>
                    ))}
                </ul> */}
                
            </div>
        )
    }
}


function mapStateToProps ({ questions , users, authedUser}){

    return {
        userIds: Object.keys(users),

        usersList: users[authedUser].name
        
    }
}

export default connect(mapStateToProps)(LeaderBoard)