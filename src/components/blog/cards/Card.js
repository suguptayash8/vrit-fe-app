import React, {Component} from "react";
import { useSelector } from 'react-redux';
import './Card.css';

function Card(){

    let isLoggedIn  = useSelector((state)=> state.loggedIn);
    console.log('is logged in ' + isLoggedIn);

    if(isLoggedIn){
        return ( <div className="Card-Container">
        <img src='https://picsum.photos/seed/picsum/200/300'></img>
        <h2>Generating electricity from atmospheric charge</h2>
        <p>According to vedas we can generate electricity by an inverted copper tree </p>
    </div>)
    }else{
        window.location.href = '/login';
    }
   
}

export default Card;