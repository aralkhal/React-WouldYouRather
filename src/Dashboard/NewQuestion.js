import React from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

class NewQuestion extends React.Component {

    state = {
        input1: '', 
        input2: '',
        toHome: '',
    }

    handleChange1 = (e) => {
        const input1 = e.target.value

        this.setState(() => ({
            input1
        }))
    }

    handleChange2 = (e) => {
        const input2 = e.target.value

        this.setState(() => ({
            input2
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const {input1, input2} = this.state
        
        // We need to add the state to the store later and Database
        console.log("New Question Submit" , input1, input2)

        const { dispatch } = this.props

        dispatch(handleAddQuestion(input1, input2))

        this.setState(() => ({
            input1: '', 
            input2: '',
            toHome: true
        }))

        // <Link to="/Dashboard/home">
        // return <Redirect to='/Dashboard/home' />

        // After submitting redirect to home page Questions
    }

    render(){

        const { input1, input2, toHome } = this.state

        // redirect to Home page after submitting
        if(toHome === true){
            return <Redirect to='/Dashboard/home'/>
        }

        return(
            <div className="newQuestion-div">
                

                <div className="newQuestion">

                    <div className="row3">
                        <h3>Create New Question</h3>
                    </div>

                    <div className="row4">
                        <h6 className="nqLeft">Complete the questions:</h6>
                        <h6 className="nqLeft2">Would you rather ...</h6>

                        <input className="nqInput1" placeholder="Enter Option One Text Here"
                                value = {input1}
                                onChange={this.handleChange1}></input>
                        <h6>OR</h6>
                        <input className="nqInput2" placeholder="Enter Option Two Text Here"
                               value = {input2}
                               onChange={this.handleChange2}></input>
                        <br></br>
                        {/* <Link to='/Dashboard/home'> */}
                            <button className="nqSubmit" type="submit"
                                    disabled={input1==='' || input2 === ''}
                                    onClick ={this.handleSubmit}>Submit</button>  
                        {/* </Link> */}
                        {/* Implement onClick to submit the question by adding it
                            to the store and DB */}
                    </div>

                </div>
            </div>
        )
    }
}


export default connect()(NewQuestion)