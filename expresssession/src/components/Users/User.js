import React, { useState, useEffect } from 'react'
import axios from 'axios'
import classes from './user.module.css'

const Users = () => {


    const [users, setUsers] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:5000/')
            .then(Response => {

                setUsers(Response.data);
            })
    }, [])



    const userDeletehandler = (timestamp) => {

        axios.delete('http://localhost:5000/' + timestamp )
        .then(response => {
                console.log(response.data)
            setUsers(response.data);
        })
    }





    const userslist = users.map((eachStudent) => {

        return (
            <tr key = {eachStudent.createdAt}>
                <td>{eachStudent.firstname}</td>
                <td>{eachStudent.lastname}</td>
                <td>{eachStudent.branch}</td>
                <td><button onClick = {() => userDeletehandler(eachStudent.createdAt)} className = {classes.btn}>Delete</button></td>
            </tr>
        )
    })




    return (
        <div>
            <div className={classes.Ques2}>
                <h1>All Users</h1>
                <div>  
                    <table className={classes.StudentTable}>
                        <thead>
                            <tr>
                                <th>firstname</th>
                                <th>lastname</th>
                                <th>branch</th>
                                <th>Delete User</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userslist}
                        </tbody>

                    </table>
                </div>

            </div>
        </div>
    )
}


export default Users