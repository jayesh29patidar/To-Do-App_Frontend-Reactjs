import React, { Component } from 'react';

class UpdateNote extends Component {




    render() {
        return (
            <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h3 className="text-center">Update Note</h3>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Task Update:</label>
                                <input placeholder="Task Content" name="taskContent" className="form-control"
                                    // value={this.state.username} onChange={this.changeUserNameHandler} 
                                    />
                            </div>
                           

                            <button className="btn btn-success offset-md-4 " style={{
                                height: 30, marginTop: 10, marginBottom: 10, paddingBottom: 30
                            }} > Save </button>

                            <button className="btn btn-danger" style={{ marginLeft: "10px" }}>Cancle</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default UpdateNote;