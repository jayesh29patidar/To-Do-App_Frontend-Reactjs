import React, { Component } from 'react';
import { Card, Header, Form, Input, Icon } from "semantic-ui-react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import NoteAppService from '../Services/NoteAppService';

class Todo extends Component {

  constructor(props) {
    super(props);

    console.log(this.props.history.location.state, "State")
    this.state = {
      task: "",
      items: [],
      user: this.props.history.location.state.user,

    };
  }

  componentDidMount() {
    this.getTask();
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = () => {
    // let { task } = this.state;
    let taskObj = { title: this.state.title, task: this.state.task, status: "not done", user: this.state.user }
    console.log(taskObj);
    if (taskObj) {
      NoteAppService.createNote(taskObj)
        .then((res) => {
          this.getTask();
          this.setState({
            taskObj: "",
          });
          console.log(res);
        });
    }
  };

  getTask = () => {
    console.log(this.state.user.id, "ID")
    NoteAppService.getNoteByUser(this.state.user.id).then((res) => {
      if (res.data) {
        console.log("notes by user id", res.data)
        this.setState({
          items: res.data.map((item) => {
            let color = "yellow";
            let style = {
              wordWrap: "break-word",
            };

            if (item.status) {
              color = "green";
              style["textDecorationLine"] = "line-through";
            }

            return (
              <Card key={item._id} color={color} fluid>
                <Card.Content>
                  <Card.Header textAlign="left">
                    <div style={style}>{item.task}</div>
                  </Card.Header>

                  <Card.Meta textAlign="right">
                    <Icon
                      name="check circle"
                      color="green"
                      onClick={() => this.updateTask(item._id)}
                    />
                    <span style={{ paddingRight: 10 }}>Done</span>
                    <Icon
                      name="undo"
                      color="yellow"
                      onClick={() => this.undoTask(item._id)}
                    />
                    <span style={{ paddingRight: 10 }}>Undo</span>
                    <Icon
                      name="delete"
                      color="red"
                      onClick={() => this.deleteTask(item._id)}
                    />
                    <span style={{ paddingRight: 10 }}>Delete</span>
                    <Icon
                      name="pencil alternate"
                      color="black"
                      onClick={() => this.updateFullNote(item._id)}
                    />
                    <span style={{ paddingRight: 10 }}>Update</span>
                    <Icon
                      name="calendar alternate"
                      color="black"
                      onClick={() => this.undoTask(item._id)}
                    />
                    {/* <span style={{ paddingRight: 10 }}></span> */}
                  </Card.Meta>

                </Card.Content>
              </Card>
            );
          }),
        });
      } else {
        this.setState({
          items: [],
        });
      }
    });
  };

  updateTask = (id) => {
    NoteAppService.updateNote(id)

      .then((res) => {
        console.log(res);
        this.getTask();
      });
  };

  undoTask = (id) => {
    NoteAppService.undoNote(id).then((res) => {
      console.log(res);
      this.getTask();
    });
  };

  deleteTask = (id) => {
    NoteAppService.deleteNote(id).then((res) => {
      console.log(res);
      this.getTask();
    });
  };

  updateFullNote = (id) => {
    // NoteAppService.updateFullNote(id).then((res) => {
    //   console.log(res);
    //   this.getTask();
    // });
      this.props.history.push("/update-note");
  };

  render() {
    return (
      <div>
        <div className="row">
          <Header className="header" as="h1">
            TO DO LIST

          </Header>
          <div>
            <h4>{this.props.history.location.state.user.username}'s Notes </h4>
            <Link to="/" >
              <button
                className="btn btn-danger m-1"
              >
                Logout
              </button>
            </Link>
          </div>
        </div>
        <div className="row">
          <Form onSubmit={this.onSubmit}>
            <Input
              type="text"
              name="task"
              onChange={this.onChange}
              value={this.state.task}
              fluid
              placeholder="Create Task"
            />
            {/* <Button >Create Task</Button> */}
          </Form>
        </div>
        <div className="row">
          <Card.Group>{this.state.items}</Card.Group>
        </div>
      </div>
    );
  }
}

export default Todo;