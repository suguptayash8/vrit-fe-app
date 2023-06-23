import React from "react";
import './Header.css';
import Logout from "../dergister/Logout";
import { useSelector } from "react-redux";

const CustomHeader = function(){
    const isLoggedIn =useSelector((state)=> state.loggedIn);

    if(isLoggedIn){
        return(
            <div className="header-container"><p></p><Logout />
            </div> 
            )
    }else {
        return;
    }
   
}

export default CustomHeader;