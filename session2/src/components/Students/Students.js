import React, { useEffect, useState } from 'react'
import axios from 'axios'
import classes from './student.module.css'


const Student = () => {
    const [studentData, setStudentData] = useState([]);
    useEffect(() => {

        axios.get('http://localhost:5000/students')
            .then((Response) => {
                setStudentData(Response.data);
            })

    }, [])


    const branchchanghandler = (event) => {
        console.log(event.target.value)
        const branch = event.target.value
        const query = `?branch=${branch}`
        axios.get('http://localhost:5000/students' + query)
            .then(Response => {
                console.log("state.chane")
                setStudentData(Response.data)
            })
    }

    const students = studentData.map((eachStudent) => {

        return (
            <tr>
                <td>{eachStudent.firstname}</td>
                <td>{eachStudent.lastname}</td>
                <td>{eachStudent.branch}</td>
            </tr>
        )
    })

    return (
        <div className = {classes.Ques2}>
            <h1>this is the students page</h1>
            <div>
            <label>filter branch</label>
            <select className={classes.Filter} onChange={branchchanghandler}>
                <option>ALL</option>
                <option>electronics</option>
                <option>CSE</option>
                <option>mechanical</option>
            </select>
            <table className = {classes.StudentTable}>
                <thead>
                    <tr>
                        <th>firstname</th>
                        <th>lastname</th>
                        <th>branch</th>
                    </tr>
                </thead>
                <tbody>
                    {students}
                </tbody>

            </table>
            </div>
          
        </div>
    )
}


export default Student