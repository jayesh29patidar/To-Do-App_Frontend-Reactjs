import React, { Component } from 'react';

class IndexPage extends Component {


    registerUser = (e) => {
        e.preventDefault();
        this.props.history.push('/add-user');
    }
    loginUser = (e) => {
        e.preventDefault();
        this.props.history.push('/login-user');
    }


    render() {
        return (
            <div className="background-main">


                <div className='main-view' >
                    <h1>
                        Welcome to ToDoApp <img id="register_logo" src={require('../Images/register.gif')} width="50px" />
                    </h1>
                    <div className="login-signup">
                        <button className="btn btn-dark " onClick={this.registerUser} >Register</button>
                        &#9135;&#9135;&#9135;&#9135; or  &#9135;&#9135;&#9135;&#9135;
                        <button className="btn btn-dark " onClick={this.loginUser} >Login </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default IndexPage;