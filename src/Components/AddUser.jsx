import React, { Component } from 'react';
import UserService from '../Services/UserService';

class AddUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username:'',
            password: '',
        }

        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.saveUser = this.saveUser.bind(this);
    }

    changeUserNameHandler = (event) => {
        this.setState({ username: event.target.value });
    }

    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = { username: this.state.username, password: this.state.password }
        console.log('user =>' + JSON.stringify(user));
        console.log("im not in")
        console.log(user)

        UserService.addUser(user).then(res => {
            console.log("im in");
            this.props.history.push('/login-user');
        });
    }

    cancel() {
        this.props.history.push("/");
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add User<img src={require('../Images/login.gif')} width="86px" /></h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>User Name:</label>
                                    <input placeholder="User Name" name="userName" className="form-control"
                                        value={this.state.username} onChange={this.changeUserNameHandler} />
                                </div>
                               
                                <div className="form-group">
                                    <label> Password: </label>
                                    <input placeholder="Password" name="password" className="form-control"
                                        value={this.state.password} onChange={this.changePasswordHandler} />
                                </div>

                                <button className="btn btn-success offset-md-4 " style={{
                                    height: 30, marginTop: 10, marginBottom: 10, paddingBottom: 30
                                }} onClick={this.saveUser}> Save </button>

                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancle</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddUser;