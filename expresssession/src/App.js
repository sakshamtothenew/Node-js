import React, { useState, useEffect } from 'react';
import './App.css';
import Users from './components/Users/User';
import Navbar from './components/navbar/navbar';
import AddUser from './components/addUSers/addUser';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Login from './components/login/login';
import axios from 'axios';

function App(props) {

  const [userGit, setUserGit] = useState("");




  const authHandler = (event) => {
    event.preventDefault()
    const name = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;

    axios.post('http://localhost:5000/auth/Signup', { name, email, password })
      .then(res => {
        console.log(res.data)
        sessionStorage.setItem("token", res.data.token)

        props.history.push({
          pathname: '/',
          search: `?token=${res.data.token}`
        })
      
      })
    axios.get('http://localhost:5000/github/sakshamsachdeva13')
      .then(response => {
        console.log(response.data)
        setUserGit("user git is: " + response.data);
      })
  }


  const loginhandler = (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;

    axios.post('http://localhost:5000/auth/login', { email, password })
      .then(res => {
        console.log(res.data);
        if (res.data.token) {
          sessionStorage.setItem("token", res.data.token)

          props.history.push({
            pathname: '/',
            search: `?token=${res.data.token}`
          })
        }
      })
  }

  let route = (<Switch>
    <Route exact path='/' component={() => <Users />} />
    <Route path='/addusers' component={() => <AddUser />} />
    <Route path='/login' component={() => <Login signIn={loginhandler} signUp={authHandler} />} />
  </Switch>)


  // if (sessionId == null) {

  //   route = (<Switch>
  //     <Route path='/login' component={() => <Login login={authHandler} />} />
  //     <Redirect to="/login" />
  //   </Switch>)

  // }
  return (
    <div>
      <Navbar />
      <div className="usergit">{userGit}</div>
      {route}
    </div>)
}

export default withRouter(App);
