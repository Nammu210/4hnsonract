import React from "react";
import { Link } from "react-router-dom";

function Nav(){
    return(
        <>
        <Link to='/'>Home</Link>
        <Link to='/Student'>Student</Link>
        <Link to='/Contact'>Contact Us</Link>
        </>
    )
        
      
}
export default Nav