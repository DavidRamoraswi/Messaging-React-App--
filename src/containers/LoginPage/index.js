import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isLoggedInUser, signin } from '../../actions/auth.actions';
import Layout from '../../components/Layout';
// import Card from '../../components/UI/Card';
import './style.css';
import { Redirect } from 'react-router-dom';
import { Grid } from '@material-ui/core';


/**
* @author
* @function LoginPage
**/

const LoginPage = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    // useEffect(() => {
    //   if(!auth.authenticated){
    //     dispatch(isLoggedInUser())
    //   }
    // }, [])


    const userLogin = (e) => {
      e.preventDefault();

      if(email === ""){
        alert("Email Required")
        return;
      }
      if (password === ""){
        alert("Password Required")
        return;
      }
      dispatch(signin({email, password}));
    }


    if(auth.authenticated) {
      return <Redirect to = {'/'}/>
    }



  return(
    <Layout>
        <div className="loginContainer">
            <Grid>
              <form onSubmit={userLogin}>
              <input className="email"
            name="email"
            type="text" value={email} onChange ={ (e) =>setEmail(e.target.value)} placeholder="Email"/>
<br/>
<br/>
            <input className="password"
            name="password"
            type="password" value={password} onChange ={ (e) =>setPassword(e.target.value)} placeholder="Password"/>
             
             <div>
             <br/>
              <button className="btn-login">Login</button>
            </div>
             
              </form>
            </Grid>         
        </div>
    </Layout>
   )

 }

export default LoginPage;