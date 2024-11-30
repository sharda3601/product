import React,{useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';


function Login() {
    const[username, setName] = useState('');
    const[password, setPass] = useState('');
    const navigate = useNavigate();

   useEffect(()=>{
        if(localStorage.getItem('user-info')){
            navigate('/');
        }else{
            navigate('/login')
        }
    },[]) 

   const login = () =>{
       
        const user = {username, password};
        fetch("http://localhost:3000/Login",{
            method : 'POST',
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(user)
        
        }).then(result=>{
            result.json().then(Response=>{
                console.log(Response);
                localStorage.setItem('user-info',JSON.stringify(Response));
                navigate('/');
            })
        }).catch(err=>{
            console.log(err);
        })
      }


    return ( 
        <>
        <h2 className='text-danger mt-5'>Login Form</h2>
        <form className='w-50 mx-auto p-3 border border-info rounded text-start'>
            <div className='m-3'>
                <label className='form-label'>Username</label>
                <input type='text' className='form-control' name='username' value={username}
                onChange={(e)=>setName(e.target.value)}></input>
            </div>
            <div className='m-3'>
                <label className='form-label'>Password</label>
                <input type='password' className='form-control' name="password" value={password}
                onChange={(e)=>setPass(e.target.value)}></input>
            </div>
            <div className='m-3'>
                <p>If you are not registered here <Link to="/register"> Register Here</Link></p>
            </div>
            <div className='my-3 text-center'>
                <button type='button' className='btn btn-success' onClick={login}>Login</button>
            </div>
        </form>
        </>
     );
}

export default Login;