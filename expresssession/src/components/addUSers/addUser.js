import React from 'react'
import axios from 'axios'
import classes from './add.module.css'
import {withRouter} from 'react-router-dom'

const AddUser = (props) => {

    const addUserhandler = (event) => {
        event.preventDefault();
         const newuser = {
            firstname : event.target[0].value,
            lastname : event.target[1].value,
            branch : event.target[2].value
         }
        axios.post('http://localhost:5000/adduser/'+ props.sessionId  , newuser)
        .then(Response => {
              if(Response.data)
              props.history.push('/')
              else {
                 alert('session expired please login')
                 props.history.push('/login')
              }
        }
             )
    }



    return (<div className = {classes.main}>
        <form onSubmit = {addUserhandler} className ={classes.form}>
            <h1>Add User</h1>
            <input placeholder="Enter Firstname" type="text" />
            <input placeholder="Enter Lastname" type="text" />
            <select placeholder="Select Branch">
                <option>CSE</option>
                <option>electronics</option>
                <option>mechanical</option>
                <option>civil</option>
            </select>
            <button>Add User</button>
        </form>
    </div>)
}


export default withRouter(AddUser)