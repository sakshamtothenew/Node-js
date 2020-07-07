import React , {useState } from 'react'
import axios from 'axios'
import classes from '../addUSers/add.module.css'
const Login = (props) => {

         const [authType , setAuthType ] = useState(true);


         const changAuthTypeHandler = _ => setAuthType(!authType);

    return (<div className={classes.main}>
        <form onSubmit={authType ? props.signUp : props.signIn} className={classes.form}>
            <h1>{ authType ? "SignUp" : "Login"}</h1>
           { authType ? <input placeholder ="name" type ="text" /> : null}
            <input placeholder="email" type="text" />
            <input placeholder = "password" type = "password" />
            <button>{authType ? "Signup" : "Login"}</button>
        </form>
    <button className = {classes.signin} onClick = {changAuthTypeHandler} >Switch to {authType ? "Signin" : "Signup"}</button>

    <button className = {classes.google}><a href = "http://localhost:5000/auth/google">Google login</a></button>
    </div>)
}


export default Login