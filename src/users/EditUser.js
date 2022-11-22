import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';

function EditUser() {
 
    let navigate = useNavigate();
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:""
    })

    const {id} = useParams()
    const{name,username,email}=user

    const onInputChange=(e)=>{

        setUser({...user,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        loadUser();
    },[])
   const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8082/user/${id}`,user)
        navigate("/")
   }

   const loadUser = async()=>{
    const result= await axios.get(`http://localhost:8082/user/${id}`)
    setUser(result.data)
   }
  return (
    <div className='container'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
        <h2 className='test-center m-2'>Edit User</h2>
        <form onSubmit={(e)=> onSubmit(e)}>
        <div className='mb-3'>
            <label htmlFor='Name' className='form-label'>
                Name
            </label>
            <input type={"text"} className="form-control" placeholder='ENter your name'
            name="name"
            value={name}
            onChange={(e)=>onInputChange(e)}
            />
        </div>

        <div className='mb-3'>
            <label htmlFor='Username' className='form-label'>
                UserFullName
            </label>
            <input type={"text"} className="form-control" placeholder='ENter your UserName'
            name="username"
            value={username}
            onChange={(e)=>onInputChange(e)}
            />
        </div>

        <div className='mb-3'>
            <label htmlFor='email' className='form-label'>
                Email
            </label>
            <input type={"text"} className="form-control" placeholder='ENter your email'
            name="email"
            value={email}
            onChange={(e)=>onInputChange(e)}
            />
        </div>
        <button type="submit" className='btn btn-outline-primary'>Submit</button>
        <NavLink to="/" className='btn btn-outline-danger mx-2'>Cancle</NavLink>
        </form>
        </div>
    </div>
  )
}

export default EditUser