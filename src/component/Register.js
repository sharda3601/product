import React,{useEffect, useState}  from 'react';
import {Link, useNavigate} from 'react-router-dom';

function Register() {
    const navigate = useNavigate();

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPass] = useState('');
    const[msg, setMsg] = useState(false);

   /*  useEffect(()=>{
        if(localStorage.getItem("user-info")){
            navigate('/login')

        }else{
            navigate('/register');
        }
    },[]) */

    const submitData = (e) =>{
        const user = {name, email, password};
        fetch("http://localhost:3000/Register",
            {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(user)
            }
        ).then((result)=>{
            result.json().then(response=>{
                console.log(response);
             //   localStorage.setItem('user-info',JSON.stringify(response));
             setMsg(true);
             navigate('/login')
            })
     }).catch(err=>{
        console.log(err);
     })
       
    }
    return ( 
        <>
        {msg && <div className='alert alert-success alert-dismissible mx-auto w-50 mt-5'>
            <span><b>Registerd successfully.</b></span>
            <button type='button' className='btn-close' data-bs-dismiss="alert"></button>
            </div>}
        <h2 className='text-warning mt-5'>Registration Form</h2>
        <form className='w-50 p-3 mx-auto border border-primary rounded text-start'>
            <div className='m-3'>
                <label className='form-label'>Name</label>
                <input type='text' className="form-control" name="name" value={name}
                 onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'></input>
            </div>
            <div className='m-3'>
                <label className='form-label'>Email</label>
                <input type='text' className="form-control" name="email" value={email} 
                onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email'></input>
            </div>  <div className='m-3'>
                <label className='form-label'>Password</label>
                <input type='text' className="form-control" name="password" value={password} 
                onChange={(e)=>setPass(e.target.value)} placeholder='Enter Password'></input>
            </div> 
            <div className='m-3'>
                <p>If you are already registered <Link to="/login"> Login Here</Link></p>
            </div>
            <div className='m-3 text-center'>
                <button type='button' className='btn btn-primary' onClick={submitData}>Register</button>
            </div>
        </form>
        </>
     );
}

export default Register;