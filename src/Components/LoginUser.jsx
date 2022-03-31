import React, { Component } from 'react';
import NoteAppService from '../Services/NoteAppService';
import UserService from '../Services/UserService';

class LoginUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userToken: '',
            username: '',
            password: '',
            isAlertShow: true,
            alertType: "danger",

        }
        this.changePassword = this.changePassword.bind(this);
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.loginUser = this.loginUser.bind(this);
        this.changeAlertDanger = this.changeAlertDanger.bind(this);
        this.changeAlertSuccess = this.changeAlertSuccess.bind(this);
    }




    changePassword = (event) => {
        this.setState({ password: event.target.value });
    }

    changeUserNameHandler = (event) => {
        this.setState({ username: event.target.value });
    }

    changeAlertDanger = (e) => {
        document.querySelector(".alertMessage").style.backgroundColor = "red";
    };
    changeAlertSuccess = (e) => {
        document.querySelector(".alertMessage").style.backgroundColor = "yellow";
    };

    loginUser = (e) => {
        e.preventDefault();
        let User = {
            username: this.state.username,
            password: this.state.password
        };
        this.changeAlertSuccess();
        console.log('user =>' + JSON.stringify(User));

        setTimeout(() => {
            UserService.loginUser(User).then((res) => {
                if (res.data.user.id === 0) {
                    this.setState({ isAlertShow: true });

                    document.querySelector(".popup").style.display = "block";
                    this.setState({
                        alertMessage: "Invalid credentials",
                    });
                }
                else {
                    document.querySelector(".popup").style.display = "block";
                    this.setState({
                        alertMessage: "Login Successful, redirecting to your notes",
                    });
                    this.setState({ isAlertShow: true });
                    this.changeAlertSuccess();
                    console.log(res.data)
                    setTimeout(() => {
                        this.props.history.push("/todo", res.data);
                    }, 3000);

                }
            });
        }, 1);
    };

    cancel() {
        this.props.history.push("/dashboard");
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">User Login</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label> Email Id: </label>
                                    <input placeholder="Username" name="username" className="form-control"
                                        value={this.state.username} onChange={this.changeUserNameHandler} />
                                </div>
                                <div className="form-group">
                                    <label> Password: </label>
                                    <input placeholder="Password" name="password" className="form-control"
                                        value={this.state.password} onChange={this.changePassword} />
                                </div>

                                <button className="btn btn-success" onClick={this.loginUser}>Login </button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>


                            </form>
                            <div class="popup"></div>
                            {this.state.isAlertShow && (
                                <div
                                    className="alertMessage"
                                    variant={this.state.alertType}
                                >
                                    <p>{this.state.alertMessage}</p>
                                </div>
                            )}


                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginUser;