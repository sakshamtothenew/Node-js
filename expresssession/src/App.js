import React from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './components/Users/User';
import Navbar from './components/navbar/navbar';
import AddUser from './components/addUSers/addUser';
import { Switch, Route } from 'react-router-dom';

function App() {

  const route = (<Switch>
    <Route exact path='/' component={Users} />
    <Route path='/addusers' component={AddUser} />
  </Switch>)

  return (
    <div>
      <Navbar />
      {route}
    </div>)
}

export default App;
