import {useState} from 'react';
import { createUser } from 'firebase/auth';

const Register = () => {
    const [data , setData]= useState({
        userName :'',
        email:'',
        password:'',
        error:null,
        loading:false
    })
    const { userName , email , password , error , loading} = data;
    const handleChange = (e)=> {
        setData({...data , [e.target.name]:e.target.value});

    }
    const handleSubmit = (e)=> {
        e.preventDefault();
    }
  return (
  <section>
      <h3>Create An Account</h3>
      <form className='register-form' onSubmit={handleSubmit}>
        <div className='input-container'>
            <label htmlFor='name' className="reg-label" >Name</label><br></br>
            <input type="text" name="name" value={userName}  className="reg-input" onChange={handleChange}></input>
        </div>
        <div className='input-container'>
            <label htmlFor='email' className="reg-label" >Email</label><br></br>
            <input type="email" name="email" className="reg-input" value={email} onChange={handleChange}></input>
        </div>
        <div className='input-container'>
            <label htmlFor='password'  className="reg-label" value={password}>Password</label><br></br>
            <input type="password" name="password" className="reg-input" onChange={handleChange}></input>
        </div>
        <div className='btn-submit'>
            <button type='submit'>Register</button>
        </div>
      </form>
  </section>);
};

export default Register;
