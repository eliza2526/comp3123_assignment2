import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


function Home() {

    const [ data, setData ] = useState([]) 
    
    const url= "http://localhost:4000/api/employees";

    useEffect(() => {
        axios.get(url)
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [])

    return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-150'>
        <h1>List of Employees</h1>
        <div className='w-auto rounded bg-white border shadow p-4'>
            <div className='d-flex justify-content-end'>
                <Link to="/add" className='btn btn-success'>Add Employee</Link>
                </div>
            <table className='table table-striped'>
                <thead>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Position</th>
                    <th>Salary</th>
                    {/* <th>Date of Joining</th> */}
                    <th>Department</th>
                </thead>
                <tbody>
                    {
                        data.map((emp, i) => (
                            <tr key={i}>
                                <td>{emp._id}</td>
                                <td>{emp.first_name}</td>
                                <td>{emp.last_name}</td>
                                <td>{emp.email}</td>
                                <td>{emp.position}</td>
                                <td>{emp.salary}</td>
                                {/* <td>{emp.date_of_joining}</td> */}
                                <td>{emp.department}</td>
                                <td>
                                    <Link to={`/get/${emp._id}`} className='btn btn-sm btn-primary me-2'>Get</Link>
                                    <button className='btn btn-sm btn-primary me-2'>Edit</button>
                                    <button className='btn btn-sm btn-danger'>Delete</button>
                                </td>
                            </tr>
                            
                        ))

                    }
                </tbody>
            </table>
        </div>
        
    </div>
  )
}

export default Home