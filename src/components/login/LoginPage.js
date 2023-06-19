import React, { useState } from "react";
import LoginUser from "../../service/LoginService";
import { updateSession } from "../../reducers/reducer";
import { useSelector, useDispatch } from 'react-redux';
import './LoginPage.css';

const LoginPage = function(){
    let [credentials, setCredentials] = useState();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state)=> state.loggedIn);
    let userName, password;
    return (
        <div className="Login-container">
           <form>
			<input type="email" placeholder="Email" onChange={(evt)=> userName = evt.target.value} />
			<input type="password" placeholder="Password" onChange={(evt)=> password = evt.target.value} />
            <button onClick={(e)=>{
                e.preventDefault();
                LoginUser({
                    'username': userName,
                    'password': password
                }).then((res)=>{
                    dispatch(updateSession({
                        loggedIn: true
                    }));
                });
            }}>Sign in</button>
           </form>
           <div className="signup-container">
            <p> Sign up if new </p>
            <button onClick={(e)=>{
                e.preventDefault();
                window.location.href = '/sign-up';
            }}>SIGN UP</button>
           </div>
        </div>
    )
}

export default LoginPage;