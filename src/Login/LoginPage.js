import React from 'react'
import { connect } from 'react-redux'
import logo from './download.png';
import { setAuthedUser } from'../actions/authedUser'
import { Link } from 'react-router-dom'

class LoginPage extends React.Component {


    handleChange(event){

        const { dispatch } = this.props
        
        const user = event.target.value
   
        dispatch(setAuthedUser(user))

    }

    render(){

 

        return(
            <div className="loginForm">
         
                <div className="newQuestion">

                    <div className="row3">
                        <h4>Welcome to the Would You Rather App!</h4>
                        <h6> Please sign in to Continue</h6>
                    </div>

                    <div className="row4">
                       
                        <img src={logo}/> 
                        <h6 className="signIn">Sign in </h6>
                        <select className="selectUser"
                               
                                onChange={(event) => this.handleChange(event)}
                                 >

                            <option value="move" >Please select a user ...</option>
                            <option value="sarahedo">Sarah Edo</option>
                            <option value="tylermcginnis">Tyler McGirnis</option>
                            <option value="johndoe">John Doe</option>
                            
                        </select>
                          
                        <Link className="nqSubmit" to='/Dashboard/home'> 
                            <button className="nqSubmit" 
                                    disabled={this.props.authedUser == null || 
                                            this.props.authedUser == "move"}
                                    >Sign in </button>
                         </Link>
                      
                    </div>

                </div>
           
            </div>

            
        )
    }
}

// read from the store the users .. then dispatch setAuthedUser with passing id

function mapStateToProps ({ authedUser }){

    return{
        authedUser: authedUser
    }
}

export default connect(mapStateToProps)(LoginPage)