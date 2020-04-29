import React, { useState, useEffect } from 'react'
import axios from 'axios'
import classes from './user.module.css'


const User = () => {


    const [users, setUsers] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:5000/users')
        .then(Response => {
            setUsers(Response.data);
        })
    }, [])

    const searchFilterhandler = (event) => {

        const username = event.target.value.trim();

        console.log(username.length)
      
            const query = `?username=${username}`
            axios.get('http://localhost:5000/users' + query)
                .then(Response => {
                    setUsers(Response.data);
                })
        
      
    }


    const userlist = users.map((eachUser) => {

        return (
            <div key={eachUser.username} className={classes.eachuser}>
                <h3>username : {eachUser.username}</h3>
                <p>firstname : {eachUser.firstName}</p>
                <p>lastname  : {eachUser.lastName}</p>
            </div>
        )
    })


    return (
        <div className={classes.main}>
            <h1>search users here</h1>
            <div>
                <input type="text" placeholder = "Enter username" onChange={searchFilterhandler} />
                {userlist}
            </div>
        </div>
    )
}


export default User