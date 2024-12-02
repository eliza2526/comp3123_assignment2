import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function AddEmployee() {

    const [ values, setValues ] = useState({
        first_name: '',
        last_name: '',
        email: '',
        position: '',
        salary: '',
        date_of_joining: ''
    })

    const navigate = useNavigate();
    const url= "http://localhost:4000/api/employees";

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(url, values)
        .then(res => { 
            console.log(res.data);
            navigate("/")
        })
        .catch(err => console.log(err));        
    }


  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
            <h1>Add Employee</h1>
                <form onSubmit={handleSubmit}>
                    <div className='mb-2'>
                        <label htmlFor="first_name">First Name: </label>
                        <input type="text" name="first_name" className='form-control' placeholder='Enter First Name' 
                        onChange={e => setValues ({...values, first_name: e.target.value})}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="last_name">Last Name: </label>
                        <input type="text" name="last_name" className='form-control' placeholder='Enter Last Name' 
                        onChange={e => setValues ({...values, last_name: e.target.value})}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="email">Email: </label>
                        <input type="text" name="email" className='form-control' placeholder='Enter Email' 
                        onChange={e => setValues ({...values, email: e.target.value})}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="position">Position: </label>
                        <input type="text" name="position" className='form-control' placeholder='Enter Position' 
                        onChange={e => setValues ({...values, position: e.target.value})}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="salary">Salary: </label>
                        <input type="text" name="salary" className='form-control' placeholder='Enter Salary'
                        onChange={e => setValues ({...values, salary: e.target.value})}/> 
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="date_of_joining">Email: </label>
                        <input type="text" name="date_of_joining" className='form-control' placeholder='Enter Date of Joiining' 
                        onChange={e => setValues ({...values, date_of_joining: e.target.value})}/>
                    </div>
                    <button className='btn btn-success'>Submit</button>
                    <Link to="/" className='btn btn-primary ms-3'>Back</Link>
                </form>
        </div>
    </div>
  )
}

export default AddEmployee