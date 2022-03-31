import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
import IndexPage from './Components/IndexPage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AddUser from './Components/AddUser';
import LoginUser from './Components/LoginUser';
import Todo from './Components/Todo';
import Unauto from './Components/Unauto';
import UpdateNote from './Components/UpdateNote';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container-fluid main-container" >
          <Switch>
            <Route path="/" exact component={IndexPage}></Route>
            <Route path="/add-user" component={AddUser}></Route>
            <Route path="/login-user" component={LoginUser}></Route>
            <Route path="/todo" component={Todo}></Route>
            <Route path="/no-token" component={Unauto}></Route>
            <Route path="/update-note" component={UpdateNote}></Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
