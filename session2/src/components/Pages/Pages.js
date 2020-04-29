import React, { useEffect, useState } from 'react'
import axios from 'axios'
import classes from './page.module.css'

const Pages = () => {

    const [pageData, setPageData] = useState("")
    const pageChangeHandler = (event, i) => {

        axios.get('http://localhost:3005/'+pages[i])
            .then((Response) => setPageData(Response.data))
    }

    const buttons = [];
    const pages = ['home', 'about', 'Contactus']
    for (let i = 0; i < 3; i++) {
        buttons.push(
            <button className = {classes.btn} onClick={(event) => pageChangeHandler(event, i)} >{pages[i]}</button>
        )
    }


    return (

        <div>
            {buttons}
            <h1>this is {pageData} data</h1>
        </div>
    )
}

export default Pages