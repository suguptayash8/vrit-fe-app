import React from "react";
import './Logout.css';

const Logout = function(){

    return(
        <button className="logout" onClick={(e)=>{
            e.preventDefault();
            localStorage.removeItem("jwt-token");
            window.location.href = '/login';
        }}>Logout</button>
        )
}

export default Logout;