import React, { useState } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import User from './components/Users/Users'
import Student from './components/Students/Students';
import Pages from './components/Pages/Pages';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import classes from './App.module.css'

const App = () => {

  const route = (
    <Switch>
      <Route path="/" exact render={() => (<h1>this is landing page use links to route</h1>)} />
      <Route path='/student' render={() => <Student />} />
      <Route path='/user' render={() => <User />} />
      <Route path='/pages' render={() => <Pages />} />
    </Switch>


  )

  return (
    <div >
      <div className = {classes.links}>
      <span><Link to='/student'>student</Link></span>
      <span><Link to='/user'>Users</Link></span>
      <span><Link to='/pages'>Pages</Link></span>
      </div>
    
      {route}
    </div>

  );
}

export default App;
