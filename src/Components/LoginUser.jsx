import React, { Component } from 'react';
import NoteAppService from '../Services/NoteAppService';
import UserService from '../Services/UserService';

class LoginUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userToken: '',
            username: '',
            password:'',
            
            
        }
        this.changePassword = this.changePassword.bind(this);
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }

   


    changePassword = (event) => {
        this.setState({ password: event.target.value });
    }

    changeUserNameHandler = (event) => {
        this.setState({ username: event.target.value });
    }

    loginUser = (e) => {
        e.preventDefault();
        let User = { 
            username: this.state.username,
            password: this.state.password
            };
        console.log('user =>' + JSON.stringify(User));
        console.log("im out");

        UserService.loginUser(User).then((res)=> {
            if (res.data.user.id === 0) {
                document.querySelector(".popup").style.display = "block";
                this.setState({
                  alertMessage: "Invalid credentials",
                });
            }
            else{
                document.querySelector(".popup").style.display = "block";
                this.setState({
                  alertMessage: "Login Successful, redirecting to your notes",
                });
                this.setState({ isAlertShow: true });
                console.log(res.data)
                this.props.history.push("/todo", res.data);
                
            }
        })

        // NoteAppService.loginUser(user).then(res =>{
        //     console.log("im in");
        //     console.log(res.data);
        //     this.setState({userToken: res.data.userToken})

        //     if(res.data.message.length === 0){
        //         console.log("wrong ")
        //         return
        //     }
        //     else{
        //         console.log("right")
        //     }

            
        //     this.props.history.push('/dashboard', res.data);
        // });
    }

    cancel(){
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
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>


                            </form>
                            <div class="popup"></div>


                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginUser;