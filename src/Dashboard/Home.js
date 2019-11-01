import React from 'react'
import Question from './Question'
import { connect } from 'react-redux'
import { Tab, Tabs } from 'react-bootstrap'

class Home extends React.Component {

    render(){

        // console.log("PROPS" + JSON.stringify(this.props))
        // console.log("Home" + JSON.stringify(this.props))
        // console.log("Home" + JSON.stringify(this.props.userQuestionList))
        // console.log("Home" + this.props.userAnsweredQuestion)
        // console.log("test" + this.props.test)
        return(
            <div>
        

                <div className="container">
                
                    <Tabs className="tabs" defaultActiveKey="home" id="uncontrolled-tab-example">
                        <Tab eventKey="home" title="Answered">
                    
                                {/* <h3> Questions - Home</h3> */}
                                <div className="container">
                                    <ul className="questionList">
                                        {/* {this.props.questionIds.map((id) => ( */}
                                        {this.props.userAnsweredQuestion.map((id) => (
                                            <li key={id}>
                                                <Question id={id}/>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                          
                        </Tab>
                        <Tab eventKey="profile" title="UnAnswered">
                          
                            <div className="container">
                                <ul className="questionList">
                                    {/* {this.props.questionIds.map((id) => ( */}
                                    {this.props.userunAnsweredQuestion.map((id) => (
                                        <li key={id}>
                                            <Question id={id}/>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Tab>
                    </Tabs>
                </div>

            </div>
        )
    }
}

function mapStateToProps ({ questions , users, authedUser}){

    // const questionsUnAnsewered = questions.filter((question) => ())
    const allQuestions = Object.keys(questions)
    const answeredQuestions = Object.keys(users[authedUser].answers)

    
    // const unAnsweredQuestions = allQuestions.filter(function (question) {

    //     // return question !== answeredQuestions

    // })

    // This diff function has been taken from StackOverflow Website.
    Array.prototype.diff = function(a) {
        return this.filter(function(i) {return a.indexOf(i) < 0;});
    };

    const unAnsweredQuestions = allQuestions.diff(answeredQuestions)

    // console.log(allQuestions - answeredQuestions)
    // console.log(answeredQuestions)
    // console.log(unAnsweredQuestions)

    return {
        questionIds: Object.keys(questions)
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp),

        usersList: users[authedUser].name,

        userAnsweredQuestion: Object.keys(users[authedUser].answers),

        userunAnsweredQuestion: unAnsweredQuestions
        
    }
}

export default connect (mapStateToProps)(Home)