import React from 'react'
import { connect } from 'react-redux'
// import  Question  from './Question'
import Home from './Home'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'

// import { Route } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Nav from './Nav'
import QuestionPage from './QuestionPage'



class Dashboard extends React.Component {
    render(){

        // console.log(this.props)

        return(
            <div>

           
            <Nav usersName={this.props.usersName}/>
            
           
            <Route path='/Dashboard/home' render={() => (
                <Home />
                )} />
          

            <Route path="/Dashboard/newQuestion" render={() => (
                <NewQuestion />
                )} />
      

            {/*  Show Leader Board */}

            <Route path="/Dashboard/leaderBoard" render={() => (
                <LeaderBoard />
                )} />
        

            {/* <Route path="/Dashboard/question/:id" render={() => (
                <QuestionPage match={{params: {id: 'xj352vofupe1dqz9emx13r'}}}/>
                // <QuestionPage />
                )} /> */}

            <Route path="/Dashboard/question/:id" component={QuestionPage} />
            

            </div>
        )
    }
}

function mapStateToProps ({ questions, users, authedUser }){

    return {
        questionIds: Object.keys(questions)
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
        
        // Testing
        usersName: users[authedUser].name
    }
}

export default connect(mapStateToProps)(Dashboard)