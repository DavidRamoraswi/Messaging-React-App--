import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Card from '../../components/UI/Card';
import './style.css';
import { signup } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

/**
* @author
* @function RegisterPage
**/

const RegisterPage = (props) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);


  const registerUser = (e) => {
    e.preventDefault();

     const user  = {
       firstName, lastName, email, password
     }
     dispatch(signup(user));
  } 

  if(auth.authenticated){
    return <Redirect to = {'/'}/>
  }

  return(
    <Layout>
      <div className="registerContainer">
          
      {/* <h3 className="heading">Register</h3> */}
      <Card >
      
        <form onSubmit={registerUser}>
          

        <input 
            name="firstName"
            type="text" value={firstName} onChange ={ (e) =>setFirstName(e.target.value)} placeholder="First Name"/>
<br/><br/>
          <input 
            name="lastName"
            type="text" value={lastName} onChange ={ (e) =>setLastName(e.target.value)} placeholder="Last Name"/>    
<br/><br/>
          <input 
            name="email"
            type="text" value={email} onChange ={ (e) =>setEmail(e.target.value)} placeholder="Email"/>
<br/><br/>
          <input 
            name="password"
            type="password" value={password} onChange ={ (e) =>setPassword(e.target.value)} placeholder="Passwprd"/>
          <div>
            <br/>
            <button className="btn-register">Register</button>
          </div>

        </form>
      </Card>

      </div>
    </Layout>
   )

 }

export default RegisterPage;