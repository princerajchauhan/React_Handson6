import React, { useContext, useState } from "react";
import StoreData from "./Store";
import { useNavigate } from "react-router-dom";
import './AddStudent.css'

const AddStudent = () =>{

    const context = useContext(StoreData)
    // console.log(context.stdName)

    const [newStud, setNewStud] = useState({
        Name:'',
        Age: '',
        Course: '',
        Batch: ''
    })

    const handleChange = (event) =>{
        setNewStud({...newStud, [event.target.name]: event.target.value})
    }
    const navigate = useNavigate()
    const submitForm = (e) =>{
        e.preventDefault()
        context.stdName.push(newStud)
        // console.log(context.stdName)
        navigate("/students")
    }
    const resetForm = () =>{
       setNewStud({Name:'', Age:'', Course:'', Batch:'' })
    }
    return(
        <>
            <form onSubmit={submitForm}>

                <div className="inputBox">
                    <input type="text" autoComplete = "off" value={newStud.Name} name='Name' onChange={handleChange} required />
                    <label htmlFor="Name">Name</label>
                </div>

                <div className="inputBox">
                    <input type="number" autoComplete = "off" value={newStud.Age} name='Age' onChange={handleChange} required />
                    <label htmlFor="Age">Age</label>
                </div>

                <div className="inputBox">
                    <input type="text" autoComplete = "off" value={newStud.Course} name='Course' onChange={handleChange} required />
                    <label htmlFor="Course">Course</label>
                </div>

                <div className="inputBox">
                    <input type="text" autoComplete = "off" value={newStud.Batch} name='Batch' onChange={handleChange} required />
                    <label htmlFor="Batch">Batch</label>
                </div>

                <div className='btnStyle'>
                    <button style={{backgroundColor: 'gray'}} onClick={resetForm} type="button">Cancel</button>
                    <button type='submit'>Submit</button>
                </div>

            </form>
        </>
    )
}

export default AddStudent