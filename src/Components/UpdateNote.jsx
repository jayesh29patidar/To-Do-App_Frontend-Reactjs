import React, { Component } from 'react';
import { Card, Header, Form, Input, Icon } from "semantic-ui-react";
class UpdateNote extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newTaskTargetedDate: this.getDate(),
    };
    this.handleNewTaskTargetedDate = this.handleNewTaskTargetedDate.bind(this);
  }
  handleNewTaskTargetedDate(e) {
    console.log("picked date", e.target.value);
    this.setState({ newTaskTargetedDate: e.target.value });
  }

  getDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }

    today = yyyy + "-" + mm + "-" + dd;
    return today;
  }

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
                  <input placeholder="Create Task" name="taskContent" className="form-control"
                  />
                </div>

                <Form>
                  <input
                    id="taskInputTargetedDate"
                    // style={TableStyle.inputDate}
                    type="date"
                    name="targeted_date"
                    value={this.state.newTaskTargetedDate}
                    onChange={this.handleNewTaskTargetedDate}
                  />
                </Form>

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