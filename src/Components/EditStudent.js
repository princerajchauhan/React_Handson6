import React, { useContext, useState } from "react";
import StoreData from "./Store";
import { useLocation, useNavigate } from "react-router-dom";
import './style.css'

const EditStudent = () => {
    const context = useContext(StoreData)
    // console.log(context)
    const indexValue = useLocation().state.data
    // console.log(indexValue)

    const [newStud, setNewStud] = useState({
        Name: context.stdName[indexValue].Name,
        Age: context.stdName[indexValue].Age,
        Course: context.stdName[indexValue].Course,
        Batch: context.stdName[indexValue].Batch
    })

    const handleChange = (event) => {
        setNewStud({ ...newStud, [event.target.name]: event.target.value })
    }

    const navigate = useNavigate()

    const handleClick = () => {
        context.stdName[indexValue] = newStud
        navigate('/students')

    }
    return (
        <div style={{ width: '95%', margin: 'auto' }}>
            <form>
                <fieldset>
                    <legend><label htmlFor="name">Name</label></legend>
                    <input type="text" id="name" name="Name" value={newStud.Name} onChange={handleChange} autoComplete="off"/>
                </fieldset>

                <fieldset>
                    <legend><label htmlFor="age">Age</label></legend>
                    <input type="text" id="age" name="Age" value={newStud.Age} onChange={handleChange} autoComplete="off"/>
                </fieldset>

                <fieldset>
                    <legend><label htmlFor="course">Course</label></legend>
                    <input type="text" id="course" name="Course" value={newStud.Course} onChange={handleChange} autoComplete="off"/>
                </fieldset>

                <fieldset>
                    <legend><label htmlFor="batch">Batch</label></legend>
                    <input type="text" id="batch" name="Batch" value={newStud.Batch} onChange={handleChange} autoComplete="off"/>
                </fieldset>

                <div className="btnStyle">
                    <button type="button" onClick={() => { navigate('/students') }} style={{ backgroundColor: 'gray' }} className="updateBtn">Cancel</button>
                    <button type="button" onClick={handleClick} className="updateBtn">Update</button>
                </div>
            </form>
        </div>
    )
}

export default EditStudent