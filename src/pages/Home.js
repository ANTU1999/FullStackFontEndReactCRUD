import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink, useParams } from 'react-router-dom';
function Home() {
    const [users,setUsers]=useState([])
    useEffect(()=>{
        // console.log("code with antu")
        loadUsers();
    },[]);

    const {id}=useParams()

    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:8082/getUsers")
        //console.log(result.data)
        setUsers(result.data);
    }
    const deleteUser=async(id)=>{
        await axios.delete(`http://localhost:8082/user/${id}`)
        loadUsers()
    }
  return (
    <div className='container'>
        <div>All user Details</div>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">user</th>  
      <th scope="col">UserName</th>
      <th scope="col">email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {
    users.map((user, index)=>(
        <tr>
      <th scope="row" key={index}>{index+1}</th>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>
        <NavLink to={`/viewuser/${user.id}`} className="btn btn-primary mx-2">View</NavLink>
        <NavLink to={`/edituser/${user.id}`}className="btn btn-outline-warning mx-2">Edit</NavLink>
        <button className="btn btn-danger mx-2"
        onClick={()=>deleteUser(user.id)}
        
        
        >Delete</button>

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

// https://app.getpostman.com/join-team?invite_code=7912e9acc6d8cbfc8dbbd50aa0604de4 postman id