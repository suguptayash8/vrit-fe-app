import React, { useState } from "react";
import RegisterUser from "../../service/RegisterService";
import { updateSession } from "../../reducers/reducer";
import { useSelector, useDispatch } from 'react-redux';
import './Register.css';

const SignUp = function(){
    let [isRegistered, setRegistered] = useState(false);
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state)=> state.loggedIn);
    let userEmail, password, confirmPassword;
    if(!isRegistered){
        return (
            <div className="sign-up-form">
               <form>
                <input type="email" placeholder="Email" onChange={(evt)=> userEmail = evt.target.value} />
                <input type="password" placeholder="Password" onChange={(evt)=> password = evt.target.value} />
                <input type="password" placeholder="Confirm Password" onChange={(evt)=> confirmPassword = evt.target.value} />
                <button className="register" onClick={(e)=>{
                    e.preventDefault();
                    if(password === confirmPassword){
                        RegisterUser({
                            'emailId': userEmail,
                            'password': password
                        }).then((res)=>{
                            setRegistered((state)=> true);
                        });
                    }
                }}>Sign Up</button>
               </form>
               <div className="log-in-container">
                <p> Sign in if already registered </p>
                <button className="register" onClick={(e)=>{
                    e.preventDefault();
                    window.location.href = '/login';
                }}>SIGN IN</button>
               </div>
            </div>
        )
    }else {
        return (
            <div className="message-display">
            <p>Thank you, you have been Successfully registered</p>
            <button className="register" onClick={(e)=> {
                e.preventDefault();
                window.location.href = '/login';
            }}> SIGN IN</button>
        </div>
        )
    }
}

export default SignUp;