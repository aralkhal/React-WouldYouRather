import React from 'react'
// import { Nav } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Nav extends React.Component {

    render(){

        // const { authedUser, user } = this.props;
        //  console.log("Nav Props ************" + authedUser);
      
        console.log( this.props);
      
        //  console.log("Nav Prop User" + user);
        return(
            <div>
                {/* <Navbar bg="light" variant="light">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                   
                </Navbar> */}

                
                <ul className="nav">
                    <li className="left-nav"></li>
                    <li className="nav-item"><Link to='/Dashboard/home'>Home</Link></li>
                    <li className="nav-item"><Link to='/Dashboard/newQuestion'>New Question</Link></li>
                    <li className="nav-item"><Link to='/Dashboard/leaderBoard'>Leader Board</Link></li>
                    <li className="right-nav">
                        {/* <a>Hello, Sarah Edo</a> */}
                        <a>Hello, {this.props.usersName}</a>
                    </li>
                    {/* <li> */}
                        {/* <button> Log out</button> */}
                        <li className="nav-item"><Link to='/'>Log Out</Link></li>
                        {/* </li> */}
                </ul>
            </div>

            
        )
    }
}



function mapStateToProps ({ questions , users, authedUser}, {usersName}){

    // console.log(users[aUser])

    // console.log("The user name: " + users[authedUser].id.name)

    

    return {
        userIds: Object.keys(users),
        authedUser: authedUser,
        // user: users[aUser],
        userName: usersName,
        aaa: users[authedUser].id.name

        // usersList: users[authedUser].name
        
    }
}

// function mapStateToProps({questions, users , authedUser}){

//     // const user = users[authedUser]
    
//     const user = users[authedUser]

//     console.log(user);
//     console.log(authedUser);
//     return{
//         // authedUser,
//         LoggedInUser: users[authedUser],
        
//         // questionOptionOneText: question.optionOne.text,
//         // questionOptionTwoText: question.optionTwo.text,
//         // author: users[question.author].name,
//         // avatar: users[question.author].avatarURL,
//     }
// }


export default connect(mapStateToProps)(Nav)