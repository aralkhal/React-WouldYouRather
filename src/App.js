import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { handleGetInitialData } from './actions/shared'
import { handleGetQuestions } from './actions/shared'
import Dashboard from './Dashboard/Dashboard';
import  Nav  from './Dashboard/Nav'
import LoadingBar from 'react-redux-loading'
import LoginPage from './Login/LoginPage';
import { Route } from 'react-router-dom'
import QuestionPage from './Dashboard/QuestionPage';


// function App() {

class App extends React.Component{

  componentDidMount() {
    this.props.dispatch(handleGetInitialData())
    this.props.dispatch(handleGetQuestions())
  }

  render(){

    console.log(this.props)

    return (
      <div className="App">

        <Route exact path="/" render={() => (
          
          <LoginPage />     
          // <QuestionPage match={{params: {id: 'xj352vofupe1dqz9emx13r'}}}/>
          
          )} />
        
        {/* Loading Bar */}
        <LoadingBar />

        {/* <Nav aUser={this.props.aUser}/> */}

       {this.props.loading === true? null
        :
        <Route path="/Dashboard" render={() => (
          <Dashboard />
          )} />
        
          // <Dashboard />
       }
      </div>
    );

  }
  
}

function mapStateToProps({ authedUser, users }){

  // const { authedUser } = getState()

  // const user = users.map((user) => (user.id == authedUser))

  return{
    loading: authedUser === null,
    aUser: authedUser
  }
}

export default  connect(mapStateToProps)(App);
