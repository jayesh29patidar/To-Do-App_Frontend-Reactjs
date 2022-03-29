import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
import IndexPage from './Components/IndexPage';
import Header from './Components/Header';
import Footer from './Components/Footer';
// import ListUser from './Components/ListUser';
import AddUser from './Components/AddUser';
import LoginUser from './Components/LoginUser';
import Todo from './Components/Todo';
// import DashboardNotes from './Components/DashboardNotes';
// import AddNote from './Components/AddNote';
// import EditNote from './Components/EditNote';
// import Contact from './Components/Contact';
// import Unauto from './Components/Unauto';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
            <div className="container-fluid main-container" >
              <Switch>
              <Route path ="/" exact component = {IndexPage}></Route>
              <Route path ="/add-user" component = {AddUser}></Route>
              <Route path ="/login-user" component = {LoginUser}></Route>
              <Route path ="/todo" component = {Todo}></Route>

              {/* <Route path ="/list-user" component = {ListUser}></Route>
              <Route path ="/dashboard" component = {DashboardNotes}></Route>
              <Route path ="/add-note" component = {AddNote}></Route>
              <Route path ="/edit-note/:id" component = {EditNote}></Route>
              <Route path ="/contact" component = {Contact}></Route>
              <Route path ="/no-token" component = {Unauto}></Route> */}

              </Switch>      
            </div>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
