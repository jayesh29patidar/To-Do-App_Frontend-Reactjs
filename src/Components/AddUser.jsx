import React, { Component } from 'react';
import UserService from '../Services/UserService';

class AddUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            confirmPassword: "",
            alertMessage: "",
            isAlertShow: true,
            alertType: "danger",
        }
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeConfirmPasswordHandler = this.changeConfirmPasswordHandler.bind(this);
        this.saveUser = this.saveUser.bind(this);
    }

    changeUserNameHandler = (event) => {
        this.setState({ username: event.target.value });
    }

    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }

    changeConfirmPasswordHandler = (event) => {
        this.setState({ confirmPassword: event.target.value });
    }

    confirmPasswordValidator(confirmpassword) {
        if (this.state.password === confirmpassword) return true;
        this.setState({ alertMessage: "Password does not match" });
        this.setState({ isAlertShow: true });
        return false;
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = { username: this.state.username, password: this.state.password }
        var isConfirmPasswordValid = this.confirmPasswordValidator(
            this.state.confirmPassword
        );
        if (!isConfirmPasswordValid) {
            return;
        }
        console.log('user =>' + JSON.stringify(user));
        console.log(user)
        this.setState({ alertMessage: "Account Created Successfully" });
        this.setState({ isAlertShow: true });
        this.setState({ alertType: "success" });

        setTimeout(() => {
            UserService.addUser(user).then(res => {
                console.log("im in");
                this.props.history.push('/login-user');
            });
        }, 3000);
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
                                <div className="form-group">
                                    <label> Confirm Password: </label>
                                    <input placeholder="Confirm Password" name="confirmPassword" className="form-control"
                                        value={this.state.confirmPassword} onChange={this.changeConfirmPasswordHandler} />
                                </div>

                                <button className="btn btn-success offset-md-4 " style={{
                                    height: 30, marginTop: 10, marginBottom: 10, paddingBottom: 30
                                }} onClick={this.saveUser}> Save </button>

                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancle</button>
                            </form>

                            {this.state.isAlertShow && (
                                <div
                                    className="alertMessage"
                                    variant={this.state.alertType}
                                >
                                    <p className="alert">{this.state.alertMessage}</p>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddUser;