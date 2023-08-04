import React, { useContext, useEffect, useState } from 'react'
import StoreData from './Store'
import { Link, useNavigate } from 'react-router-dom'
import './style.css'

const Student = () => {

    const context = useContext(StoreData)

    const navigate = useNavigate()

    const [count, setCount] = useState(context.stdName.length)

    // const deleteFun = (index) => {
    //     context.stdName.splice(index, 1)
    //     setCount(context.stdName.length)
    // }
    useEffect(() => {
    }, [count])

    return (
        <div style={{ width: '90%', margin: '50px auto' }}>
            <div className="head">
                <h1>Students Details</h1>
                <button onClick={() => navigate("/students/addstudent")} id='headBtn'>Add New Student</button>
            </div>
            <table id='tblStyle' cellSpacing='1'>
                <thead style={{ backgroundColor: 'lightgray' }}>
                    <tr>
                        <th style={{ textAlign: 'left' }}>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Batch</th>
                        <th>Change</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        context.stdName.map((element, index) => {
                            return (
                                <tr key={index}>
                                    <td style={{ textAlign: 'left' }}>{element.Name}</td>
                                    <td>{element.Age}</td>
                                    <td>{element.Course}</td>
                                    <td>{element.Batch}</td>
                                    <td><Link state={{ data: `${index}` }} to="/editstudent">Edit</Link></td>
                                    <td onClick={() => {
                                        context.stdName.splice(index, 1)
                                        setCount(context.stdName.length)
                                    }}><i className="fa fa-trash" style={{ cursor: 'pointer' }}></i></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Student