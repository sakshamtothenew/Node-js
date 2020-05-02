import React from 'react'
import axios from 'axios' 
import  classes from '../addUSers/add.module.css'
const login = (props) => {
    

     return(<div className = {classes.main}>
        <form onSubmit = {props.login} className ={classes.form}>
            <h1>Login</h1>
            <input placeholder="username" type="text" />
            <button>Login</button>
        </form>
    </div>)
}


export default login