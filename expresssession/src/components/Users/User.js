import React, { useState, useEffect } from 'react'
import axios from 'axios'
import classes from './user.module.css'
import { withRouter } from 'react-router-dom'
import queryString from 'query-string'

const Users = (props) => {


    const [users, setUsers] = useState([]);

    useEffect(() => {



        const token = props.location.search.split('=')[1];
   sessionStorage.setItem("token" , token)
        axios.get('http://localhost:5000/student', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(Response => {
                if (Response.data.message) {
                    alert('Please Login again session Expired')

                    props.history.push('/login')
                }
                else {
                    setUsers(Response.data)
                }
            })
    }, [])





    const userDeletehandler = (timestamp) => {

        axios.delete('http://localhost:5000/student/' + timestamp)
            .then(response => {
                if (response.data.ok == 1) {
                    const token = sessionStorage.getItem("token");

                    axios.get('http://localhost:5000/student', {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                        .then(Response => {

                            if (Response.data.message) {
                                alert('Please Login again session Expired')

                                props.history.push('/login')
                            }
                            else {
                                setUsers(Response.data)
                            }
                        })
                }

            })
            .catch(err => {
                setUsers([])
            })
    }





    const userslist = users.map((eachStudent) => {

        return (
            <tr key={eachStudent._id}>
                <td>{eachStudent.firstname}</td>
                <td>{eachStudent.lastname}</td>
                <td>{eachStudent.branch}</td>
                <td><button onClick={() => userDeletehandler(eachStudent._id)} className={classes.btn}>Delete</button></td>
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


export default withRouter(Users)