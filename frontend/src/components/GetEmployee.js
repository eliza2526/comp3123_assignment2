import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';


function GetEmployee() {

    const [ data, setData ] = useState([]) 
    const { _id } = useParams();
   
    const url= "http://localhost:4000/api/employees/";

    useEffect(() => {
        axios.get(url + _id )
        .then(res => console.log(res.data))
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [])

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h3>Employee Details</h3>
            <div className='mb-2'>
                <strong>Employee ID: {data._id}</strong>
            </div>
            <div className='mb-2'>
                <strong>First Name: {data.first_name}</strong>
            </div>
            <div className='mb-2'>
                <strong>Last Name: {data.last_name}</strong>                
            </div>
            <div className='mb-2'>
                <strong>Email: {data.email}</strong>
            </div>
            <div className='mb-2'>
                <strong>Position: {data.position}</strong>
            </div>
            <div className='mb-2'>
                <strong>Salary: {data.salary}</strong>
            </div>
            <div className='mb-2'>
                <strong>Date of joiining: {data.date_of_joining}</strong>
            </div>
            <div className='mb-2'>
                <strong>Department: {data.department}</strong>
            </div>
            <Link to={`/get/frontend?id=${_id}`} className='btn btn-success'>Edit</Link>
            <Link to="/" className='btn btn-primary ms-3'>Back</Link>
            </div>
    </div>
  )
}

export default GetEmployee